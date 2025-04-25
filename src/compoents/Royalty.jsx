import React, { useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchRoyaltyAPI, postRoyaltyAPI } from '../services/royaltyServices';
import { useNavigate, useParams } from 'react-router-dom';

const Royalty = () => {
  const navigate = useNavigate();

    const {franchiseId} = useParams()
    console.log('Id:', franchiseId);
  

  const [activeFranchiseId, setActiveFranchiseId] = useState(null);

  const validationSchema = Yup.object({
    franchiseId: Yup.number().required('FranchiseId is required'),
    commissionRate: Yup.number().required('Commission Rate is required'),
    totalRevenue: Yup.number().required('Total Revenue is required'),
    royaltyAmount: Yup.number(),
  });

  // Fetch all franchises' royalty data
  const { data: royaltyData = [] } = useQuery({
    queryKey: ['fetchRoyalty', franchiseId],
    queryFn:  () => fetchRoyaltyAPI(franchiseId),
    enabled: !!franchiseId,
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });

  const { mutateAsync } = useMutation({
    mutationFn: postRoyaltyAPI,
    mutationKey: ['postRoyalty'],
  });

console.log("royaltyData",royaltyData)
  const initialValues = {
    franchiseId: '',
    commissionRate: '',
    totalRevenue: '',
    royaltyAmount: '',
  };
   

  const handleClick = (key) =>{

    setActiveFranchiseId(key)
  }

  


  const handleSubmit = (values, { resetForm }) => {
    mutateAsync(values).then(() => {
      alert('Royalty data submitted successfully');
      navigate(`/status/${values.franchiseId}`)

      
      //resetForm();
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-400 shadow-lg">
      <div className="w-96 p-7 shadow-lg bg-white rounded-md">
        <div className="text-sm text-center font-semibold mb-4">
          Commission Calculation
        </div>


        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >


{({ resetForm }) => (

          <Form className="space-y-3">
            <Field
              type="number"
              name="franchiseId"
              className="border w-full text-xs text-center mb-2"
              placeholder="Enter franchiseId"
            />
            <ErrorMessage
              name="franchiseId"
              component="div"
              className="text-red-500 text-xs text-center"
            />

            <Field
              type="number"
              name="commissionRate"
              className="border w-full text-xs text-center mb-2"
              placeholder="Enter Commission rate"
            />
            <ErrorMessage
              name="commissionRate"
              component="div"
              className="text-red-500 text-xs text-center"
            />

            <Field
              type="number"
              name="totalRevenue"
              className="border w-full text-xs text-center mb-2"
              placeholder="Enter Total revenue"
            />
            <ErrorMessage
              name="totalRevenue"
              component="div"
              className="text-red-500 text-xs text-center"
            />

            <button
              type="submit"
              className="bg-stone-950 text-white rounded-full text-xs w-full cursor-pointer py-1 mt-3"
              >
              Calculate
            </button>

            <div className="mt-6 space-y-4">
          {royaltyData.map((royalty) => (
            <div key={royalty.franchiseId}>
                
 
            
              {/* {activeFranchiseId === royalty.franchiseId && (
                <Field
                  type="number"
                  className="border w-full text-xs text-center mt-2"
                  name="royaltyAmount"
                  value={royalty.royaltyAmount}
                  readOnly
                />
                )}  
                 
                  {royalty.franchiseId}  */}
            </div>   
           
          ))}

  </div>

  {royaltyData.map((royalty) => (
<input
                  type="number"
                  className="border w-full text-xs text-center mt-2"
                  name="royaltyAmount"
                  value={royalty.royaltyAmount}
                  readOnly
                />
              
        ))}

            <button
          type="button"
          onClick={() => resetForm()}
          className="bg-gray-500 text-white rounded-full text-xs w-1/2 cursor-pointer py-1 ml-2"
        >
          Clear
        </button>

          </Form>

)}
        </Formik>

      
        
        <div>

       
        
        {/* <button type='button'  className='bg-stone-950 text-white rounded-full text-xs w-full cursor-pointer py-1' >
          View Amount
        </button> */}
        
     
        
  </div>


     

    </div>
    </div>
    )
  }

export default Royalty;
