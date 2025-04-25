import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEmpAPI, fetchEmployeeAPI } from '../services/employeeService';

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart = () => {
  const navigate = useNavigate();

  const { data: employeedata = [],refetch} = useQuery({
    queryFn: fetchEmployeeAPI,
    queryKey: ['fetchemployee'],
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });


  const handleupdate = (key)=>{

  console.log("update")
    navigate(`/employee/${key}/edit`)
    console.log(key)

  }

  const {mutate,data: itemdata}=  useMutation({

    mutationFn:deleteEmpAPI,  
    mutationKey:["deleteEmp"],
  
    onSuccess: () => {
      refetch();
    },
  })
  



  const handledelete =(key)=>{

    console.log("emp to be deleted",key)
    mutate({id:key})
  }
  
  
  
  const maleCount = 60;
  const femaleCount = 40;

  const pieData = {
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
      <div className="text-center mt-5 font-bold text-blue-900 text-2xl">
        Employee Details
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition px-6 py-3 rounded-md font-semibold"
          onClick={() => navigate('/addemployee')}
        >
          Add Employee
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <table className="border border-black w-3/4">
          <thead>
            <tr className="border border-black bg-gray-200 text-lg">
              <th className="border p-4 text-center">ID</th>
              <th className="border p-4 text-center">Full Name</th>
              <th className="border p-4 text-center">Position</th>
              <th className="border p-4 text-center">Status</th>
              <th className="border p-4 text-center">Email</th>
              <th className="border p-4 text-center">Contract (yrs)</th>
              <th className="border p-4 text-center"></th>
              <th className="border p-4 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {employeedata.map((employee, index) => (
              <tr key={index}>
                <td className="border p-4 text-center">{employee.id}</td>
                <td className="border p-4 text-center">{employee.name}</td>
                <td className="border p-4 text-center">{employee.position}</td>
                <td className="border p-4 text-center">{employee.status}</td>
                <td className="border p-4 text-center">{employee.email}</td>
                <td className="border p-4 text-center">{employee.contract}</td>
                <td
                  className="cursor-pointer border p-4 text-center"
                    onClick={()=>handleupdate(employee._id)}
                >
                  Edit
                </td>
                <td className="border p-4 text-center  mouse-pointer"  onClick={() => handledelete(employee._id)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition px-6 py-3 rounded-md font-semibold"
        >
          Submit
        </button>
      </div>

      <br />

      <div className="flex justify-center pt-6">
        <div style={{ width: '400px', height: '400px' }}>
          <Pie data={pieData} />
        </div>
      </div>
    </>
  );
};

export default GenderPieChart;
