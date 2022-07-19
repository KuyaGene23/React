import axios from "axios";


const registerHere = (payload) => {
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/register",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}  
    };
      return axios(config)      
 };

 const login = (payload) => {
     const config = {
         method: "POST",
         url: "https://api.remotebootcamp.dev/api/users/login",
         data: payload,
         withCredentials: true,
         headers: {"Content-Type": "application/json"},    
     };
     return axios(config)
 }

 const getCurrentUser = () => {
     const config = {
         method: "GET",
         url: "https://api.remotebootcamp.dev/api/users/current",
         withCredentials: true,
         crossdomain: true,
         headers: {"Content-Type": "application/json"}
     };
     return axios(config)
 }

const usersServices = { registerHere, login, getCurrentUser}
export default usersServices;