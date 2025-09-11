import axios from 'axios'

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
})

//list of all the points

export const sendOtp =  (data)=>{
   return  api.post('/api/send-otp' , data)
}
export const verifyOtp = (data)=>{
    return api.post('/api/verify-otp' , data);
}

export default api;