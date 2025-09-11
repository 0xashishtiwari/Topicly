const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');
const User = require('../models/user-model');
const userService = require('../services/user-service');
const tokenService = require('../services/token-service');
const UserDto = require('../dtos/user.dtos');


class AuthController {
   
    async sendOtp(req , res){

        const {phone} = req.body;

        if(!phone){
           return res.status(400).json({message : "Phone field is required"});
        }

        
        //Generate a otp
        const otp = otpService.generateOtp();
        
        //hash
        const ttl = 1000*60*2;  // 2 minute 
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;

        const hash = hashService.hashOtp(data);

        //send otp
        try {
            
        // await otpService.sendBySms(phone , otp);
           return  res.json({
                hash : `${hash}.${expires}`,
                phone : phone,
                otp
            })

        } catch (error) {
            console.log("Error in sending otp" , error);    
            return res.status(500).json({message:"message sending failed"});
        }

    }

    async verifyOtp(req, res){
        const {otp , phone , hash} = req.body;

        if(!otp || !hash || !phone){
          return  res.status(400).json({message : "All feilds are required"});

        }
        const [hashedOtp , expires] = hash.split('.');
        if(Date.now()> +expires){
           return res.status(400).json({message : "OTP expired"});

        }
     const data = `${phone}.${otp}.${expires}`;
     const isValid = otpService.verifyOtp(hashedOtp ,data );

     if(!isValid){
        res.status(400).json({message : "Invalid OTP"});
     }

     let user;
    

     try {
      user =  await userService.findUser({phone});
      if(!user){
       user =  await userService.createUser({phone});
      }
     } catch (error) {
        console.log('Error occured during verifying otp');
        console.log(error);
       return res.status(500).json({message : "Db error"})
     }

     //token generations 
     
    const {accessToken , refreshToken} = tokenService.generateTokens({__id : user._id , activated : false});
        
    res.cookie('refreshtoken' , refreshToken,  {
        maxAge : 1000*60 * 60 * 24 * 30 , // 30 days
        httpOnly : true
    })

const userDto = new UserDto(user);
  return  res.json({accessToken ,user : userDto});

    }
}


module.exports = new AuthController();

