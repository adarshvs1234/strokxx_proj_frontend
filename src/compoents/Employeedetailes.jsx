import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Navigate, useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);
const GenderPieChart = () => {

  const navigate = useNavigate()
  
  const maleCount = 60;
  const femaleCount = 40;

  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [maleCount, femaleCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <>

    <div className="text-center mt-5 mr-2 font-bold text-blue-900 text-2xl text-center">Employee Details</div>


    <div className="flex justify-center mt-6">
  <button
    type="button"
    className="border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition px-6 py-3 rounded-md font-semibold"  onClick={()=> navigate('/addemployee')}>
    Add Employee
  </button>
</div>


    <div className="flex justify-center mt-10">
        <table className="border border-black w-3/4"> 
          <tr className="border border-black bg-gray-200 text-lg"> 
            <th className="border border p-4 text-center">ID</th>
            <th className="border border p-4 text-center">Full Name</th>
            <th className="border border p-4 text-center">Position</th>
            <th className="border border p-4 text-center">Status</th>
            <th className="border border p-4 text-center">Email</th>
            <th className="border border p-4 text-center">Contract(yrs)</th>
            <th className="border border p-4 text-center"></th>
            <th className="border border p-4 text-center"></th>
            
          </tr>

          <tr>
           <td  className='border border p-4 text-center'> 1222 </td> 
           <td className='border border p-4 text-center'>Adarsh </td>
           <td className='border border p-4 text-center'> Junior Web Developer </td>
           <td className='border border p-4 text-center'> Active  </td>
           <td className='border border p-4 text-center'>adarsh@gmail.com</td>
           <td className='border border p-4 text-center'>2</td>
           <td className='cursor-pointer border border p-4 text-center' onClick={()=>navigate('/editpage')} > Edit </td>
           <td className='border border p-4 text-center'> Delete </td>
          </tr>

          </table>
      </div>

    


      <div className="flex justify-center mt-6">
  <button
    type="submit"
    className="border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition px-6 py-3 rounded-md font-semibold">
    Submit
  </button>
</div>




      
      <br />
     

     <div style={{ width: '400px', height: '400px' }} className='pt-0.5'>
      <Pie data={data} />
    </div> 
    </>
  );
};

export default GenderPieChart;

