const crypto = require('crypto');
const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio');
const hashService = require('./hash-service');

const client = twilio(smsSid , smsAuthToken);

class OtpService {

    generateOtp(){
        const otp = crypto.randomInt(1000 , 9999);
        return otp;
    }
    async sendBySms(phone , otp){
        return await client.messages.create({
            to : phone,
            from : process.env.SMS_PHONE_NUMBER,
            body : `Your Topicly OTP is ${otp}`
        })
    }

    verifyOtp(hashedOtp  , data){
        let computedHash = hashService.hashOtp(data);
        return computedHash == hashedOtp;
        
    }
    sendByEmail(){

    }


}

module.exports = new OtpService();
