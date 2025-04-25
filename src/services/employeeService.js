import axios from "axios";
import { BASE_URL } from "../utls/urls";
import { getToken } from "../utls/cookiehandler";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true


export const postEmpLoyeeAPI = async(data)=>{

        const token = getToken()
        console.log("token",token)
        console.log("data",data);
        console.log("jii")
        const response = await axios.post(`${BASE_URL}/add`,data,{
                withCredentials: true,
            headers:{
                    Authorization:`Bearer ${token}`
            }

               
})
        return response.data
}




export const fetchEmployeeAPI = async (data) => {

        const token = getToken()
        console.log("token",token)
        console.log("get")


const response = await axios.get(`${BASE_URL}/getEmployee`,{

        params:data,
        headers:{
                Authorization:`Bearer ${token}`
        }

});

console.log("get")
const frid = response.data.user.franchiseId
console.log("frid",frid)
 Cookies.set("franchise_Id",frid,{expires:1})

return response.data;
};


export const updateEmployeeAPI = async(data,id)=>{


        
        const token = getToken()
        console.log(token)
       
        
       console.log("Update data",data)
       console.log("update id",id)
        const response = await axios.put(`${BASE_URL}/employee/${id}/edit`, data,{
                        
                headers:{
                        Authorization:`Bearer ${token}`
                }
        })
        console.log("update")   
console.log(response.data)

return response.data
}

export const deleteEmpAPI = async(itemdata)=>{

        const token = getToken()
        console.log(token)
        console.log("Delete emp id",itemdata)
 const response = await axios.delete(`${BASE_URL}/employee/${itemdata.id}/remove`,{
                        
        headers:{
                Authorization:`Bearer ${token}`
        }
        })
console.log("kello");

 return response.data
 }


