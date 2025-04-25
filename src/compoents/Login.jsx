import React, { use } from 'react'
import * as Yup from 'yup'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { useDispatch,} from 'react-redux'
import { login } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
 import { useMutation } from '@tanstack/react-query'
 import { loginAPI } from '../services/userServices'
import Cookies from 'js-cookie'



const Login = () => {

  

const navigate = useNavigate()
const dispatch = useDispatch()

 
const validationSchema = Yup.object({

  email : Yup.string().email().required('email is required'),
  password : Yup.string()
              .min(3,'Password must be atleast 3 characters')
              .required('Password is required')

})


 const {mutateAsync,isError,error} = useMutation({
   mutationFn: loginAPI,
   mutationKey: ["login"]
 })

const initialValues = {

  email:'',
  password:'',
  rememberMe:false
  
} 


  const handleSubmit = async(values,{resetForm}) => {


    try{

        
    //  const token = await mutateAsync(values);
    //  console.log("token",token)
    //   const data = jwtDecode(token);

    const response = await mutateAsync(values);
const token = response.token;
const data = jwtDecode(token);
      
      Cookies.set("userData",token,{ expires: 1 }); 
      //Cookies.set("userId",userId,{expires:1})
      
      dispatch(login(data),JSON.stringify(values));
      navigate('/payment')

      
    } 
    
    catch (error) {
     
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
     
    }

//resetForm()

  }

return (

    <div className="flex justify-center items-center h-screen  bg-cyan-300 shadow-lg ">
     <div className="w-120 p-11 bg-white rounded-md md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">




      <h1 className='text-center pb-3'>Log In</h1>
  

  
  <Formik
        initialValues = {initialValues}
      validationSchema = {validationSchema}
      onSubmit = {handleSubmit}
      resetForm>



      {()=>(  
<Form>


{isError && (
    <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
      {error?.response?.data?.message || error?.message || 'Login failed. Please try again.'}
    </div>
  )}



<div className="mb-4">
<Field type='text' name='email'  className='text-xs border text-center w-full' placeholder="Enter email" />

<ErrorMessage name='email'  component='div' className="text-red-500 text-xs" />

</div>


<div className="mb-4">
  <Field  type='password'  name='password'   className="text-xs border text-center w-full" placeholder="Enter password"/>
  <ErrorMessage name='password' component="div" className="text-red-500 text-xs" />
</div>





<div className="text-center mt-4">
<button type="submit" className="bg-stone-950 text-white rounded-full text-xs w-full  cursor-pointer" > Login</button>
</div>

</Form>
)}

</Formik>
    <br />
       
  
    </div>
    </div>

  )
}

export default  Login