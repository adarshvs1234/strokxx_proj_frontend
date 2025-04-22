
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'


export const getToken = ()=>{
    return Cookies.get("userData")  
}

 export const userData = ()=>{
    return Cookies.get("userData")? jwtDecode(Cookies.get("userData")):null
} 




export const getNameToken = ()=>{
    return Cookies.get("userNameData")  
}

 export const userNameData = ()=>{
    return Cookies.get("userNameData")? jwtDecode(Cookies.get("userNameData")):null
} 

