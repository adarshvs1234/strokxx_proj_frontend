 import React from 'react'
 import * as Yup from 'yup'
 import { useMutation, useQueryClient } from '@tanstack/react-query'
 import { ErrorMessage, Field, Form, Formik } from 'formik'
// // import {  postTransactionAPI } from '../services/transactionServices'
 import { useNavigate } from 'react-router-dom'
import { postEmpLoyeeAPI } from '../services/employeeService'

function AddEmp() {
     const queryClent = useQueryClient()
    const navigate = useNavigate()
 
 const validationSchema = Yup.object({

    id : Yup.number().required('id is required'),

    name: Yup.string().required('Full name is required'),

    position : Yup.string().required('Position is required'),

    status: Yup.string().required('Status is required'), 

    email : Yup.string().email().required("Email is required"),

    contract : Yup.number().required("Email is required")

  })

   const {mutateAsync} = useMutation({
        mutationFn: postEmpLoyeeAPI,
       mutationKey:["addEmployee"]
    })

   const initialValues = {

    id: '',
    name: '',
    position: '',
    status: '',
    email : '',
    contract : ''
   }


  const handleSubmit = (values,{resetForm}) =>{
     console.log("hi");
    
     console.log(values)
       
       mutateAsync(values)
       .then((data)=>{

      console.log(data)
        alert("Employee added successfully")
      queryClent.invalidateQueries()
      
      navigate('/payment')

     })
     //resetForm();
   }

 return (

  <div className="flex justify-center items-center h-screen bg-red-400 shadow-lg">
 <div className="w-96 h-66  p-7 shadow-lg bg-white rounded-md flex flex-col justify-between">
   <div className="text-sm text-center font-semibold">
    Add Employee
   </div>
   
     <br />


 <Formik
 initialValues = {initialValues}
 validationSchema = {validationSchema}
 onSubmit = {handleSubmit}
 resetForm>
 <Form>


 <div>
     <Field
                 type="number"
                 name="id"
                 className="border w-full text-xs text-center   mb-2"
                 placeholder="Enter id"
               />
  <ErrorMessage name="id" component="div" className="text-red-500 text-xs text-center " />
  </div>


 
  <div>
     <Field
                 type="text"
                 name="name"
                 className="border w-full text-xs text-center  mb-2"
                 placeholder="Enter name"
               />
               <ErrorMessage name="name" component="div" className="text-red-500 text-xs  text-center" />
             </div>



             <div>
               <Field
                type="text"
                name="position"
                className="border w-full text-xs text-center   mb-2"
                placeholder="Enter position"
              />
              <ErrorMessage
                name="position"
                component="div"
                className="text-red-500 text-xs   text-center"
              />
            </div>


            <div>
     <Field
                 type="text"
                 name="email"
                 className="border w-full text-xs text-center  mb-2"
                 placeholder="Enter email"
               />
               <ErrorMessage name="email" component="div" className="text-red-500 text-xs  text-center" />
             </div>

             <div>
     <Field
                 type="number"
                 name="contract"
                 className="border w-full text-xs text-center  mb-2"
                 placeholder="Enter contract"
               />
               <ErrorMessage name="contract" component="div" className="text-red-500 text-xs  text-center" />
             </div>


             <div>
     <Field
                 type="text"
                 name="status"
                 className="border w-full text-xs text-center  mb-2"
                 placeholder="Enter status"
               />
               <ErrorMessage name="status" component="div" className="text-red-500 text-xs  text-center" />
             </div>



           

<button type='submit' className='bg-stone-950 text-white rounded-full text-xs w-full  cursor-pointer py-1 mt-3'>Submit</button>


</Form>
</Formik>

<div>

  
  </div>    


</div>

</div>

  )
 }

export default AddEmp