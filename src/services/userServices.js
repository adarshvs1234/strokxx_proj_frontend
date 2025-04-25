import axios from "axios";
import { BASE_URL } from "../utls/urls";
import Cookies from "js-cookie";
//import { getToken} from "../utls/cookiehandle";
axios.defaults.withCredentials = true


export const loginAPI = async(data)=>{
        console.log("data",data);

        const response = await axios.post(`${BASE_URL}/login`,data,{
                withCredentials: true
               
})


// const userId = response.data.user._id;
 Cookies.set("userId",response.data.user._id,{expires:1})
// console.log("userIdkkkk",userId)

return response.data


}

