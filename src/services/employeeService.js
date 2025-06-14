import axios from "axios";
import { BASE_URL } from "../utls/urls";


axios.defaults.withCredentials = true


export const fetchDestination = async () => {

       console.log("API")
const response = await axios.get(`${BASE_URL}/api/destinations`)        
return response.data;

};

export const fetchTopSelling = async () => {

       console.log("API")
const response = await axios.get(`${BASE_URL}/api/packages/top-selling`)        
return response.data;

};







