import axios from "axios";
import { BASE_URL } from "../utls/urls";
//import { getToken} from "../utls/cookiehandle";
axios.defaults.withCredentials = true


export const loginAPI = async(data)=>{
        console.log("data",data);

        const response = await axios.post(`${BASE_URL}/login`,data,{

                withCredentials: true
})
        return response.data
}
        