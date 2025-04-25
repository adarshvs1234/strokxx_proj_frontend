import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateEmployeeAPI } from '../services/employeeService';

const EditDetailes = () => {
  
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const {id} = useParams()
  console.log("params id",id)


  const initialValues = {

    id:'',
    name: '',
    position: '',
    status: '',
    email: '',
    contract : ''
  };

  const validationSchema = Yup.object({

    name: Yup.string().required('Name is required'),
    position: Yup.string().required('Position is required'),
    status: Yup.string().required('Status is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contract: Yup.number().required('Contract is required')


  });


const {mutateAsync,data} = useMutation({


  mutationFn: (data) => updateEmployeeAPI(data,id),
  mutationKey : ["updateEmployee"]
})



  const handleSubmit = async (values, { resetForm }) => {

mutateAsync(values)
        .then((data)=>{
        
              console.log("mydata",data)
            
              queryClient.invalidateQueries()
              navigate('/payment')  
            
    })
    //resetForm()
    }
    
  return (
    <div className="flex justify-center bg-blue-100 py-10 px-4 min-h-screen">
      <div className="w-full max-w-md p-6 sm:p-10 shadow-lg bg-white rounded-lg">
        <div className="text-center text-xl font-semibold mb-6">Edit Details</div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
          <div className="mb-4">
              <Field
                type="number"
                name="id"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="ID"
              />
              <ErrorMessage
                name="id"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>



            <div className="mb-4">
              <Field
                type="text"
                name="name"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Full Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <Field
                type="text"
                name="position"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Position"
              />
              <ErrorMessage
                name="position"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <Field
                type="text"
                name="status"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Status"
              />
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <Field
                type="email"
                name="email"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>



            <div className="mb-4">
              <Field
                type="number"
                name="contract"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Contract"
              />
              <ErrorMessage
                name="contract"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>


            <button
              type="submit"
              className="bg-stone-950 text-white rounded-full text-sm w-full py-2"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditDetailes;
