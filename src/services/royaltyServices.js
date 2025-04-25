import axios from "axios";
import { BASE_URL } from "../utls/urls";
import { franchise_Id, getToken } from "../utls/cookiehandler";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

axios.defaults.withCredentials = true


export const postRoyaltyAPI = async(data)=>{

    const token = getToken()
    console.log("token",token)
    console.log("data",data.franchiseId);
    console.log("jii")
    const response = await axios.post(`${BASE_URL}/calculate`,data,{
            withCredentials: true,
        headers:{
                Authorization: `Bearer ${token}`
        }


  
})

//  Cookies.set("franchise_Id",data.franchiseId,{expires:1})


    // console.log("cookie set",cookie)
    


    
    return response.data
}


export const fetchRoyaltyAPI = async (franchiseId) => {

    const token = getToken()
   
    console.log("token",token)
    console.log("get")

    
        // const {id} = useParams()
        // console.log("params",id)


//    const cookieg = Cookies.get("franchise_Id")
//    console.log("franchiseId",cookieg)

const response = await axios.get(`${BASE_URL}/status/${franchiseId}`,{


    // params:data,    
    headers:{
            Authorization:`Bearer ${token}`
    }

});

console.log("response.data",response.data)

return response.data;
};


