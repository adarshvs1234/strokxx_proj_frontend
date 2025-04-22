import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const paymentOptions = () =>{

    navigate('/paymentOptions')

  }

  return (
    <>
      
      <div className="text-center mt-5 mr-2 font-bold text-blue-900 text-2xl text-center">
        Fee Payment
      </div>

     
      <div className="flex justify-center mt-10">
        <table className="border border-black w-3/4"> 
          <tr className="border border-black bg-gray-200 text-lg"> 
            <th className="border border p-4 text-center">Installment</th>
            <th className="border border p-4 text-center">Fee</th>
            <th className="border border p-4 text-center">Due Date</th>
            <th className="border border p-4 text-center">Pay</th>
          </tr>

          <tr className="text-lg">
            <td className="border border p-4 text-center">1</td>
            <td className="border border p-4 text-center">12000</td>
            <td className="border border p-4 text-center">21-02-2025</td>
            <td className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 rounded cursor-pointer text-center ">
              Pay
            </td>
          </tr>

          <tr className="text-lg">
            <td className="border border p-4 text-center">2</td>
            <td className="border border p-4 text-center">12000</td>
            <td className="border border p-4 text-center">21-03-2025</td>
            <td className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 rounded cursor-pointer text-center" onClick={paymentOptions} >
              Pay
            </td>
          </tr>
        </table>
      </div>
    
      
      <br />
      <div className="text-center text-lg">
        EMI payment available
        <span
          className="text-blue-500 underline cursor-pointer ml-2"
          onClick={() => navigate('/emi')}
        >
          Click here
        </span>
      </div>
    </>
  );
};

export default Payment;
