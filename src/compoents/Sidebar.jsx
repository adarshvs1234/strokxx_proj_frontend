import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [feesOpen, setFeesOpen] = useState(false); 
  const navigate = useNavigate();

  return (
    <div className="h-screen flex">
      
      <div
        className={`relative ${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
       
        <button
          className="absolute top-2 left-2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>

       
        <ul className="mt-10 space-y-2 px-2">
          
          <li
            className="p-2 hover:bg-gray-700 rounded cursor-pointer flex justify-between items-center"
            onClick={() => setFeesOpen(!feesOpen)}
          >
            My Fees 
            {feesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </li>

         
          {feesOpen && (
            <ul className="ml-4 space-y-1">
              <li
                className="p-2 hover:bg-gray-700 rounded cursor-pointer"
                onClick={() => navigate('/payment')}
              >
                 Fee Payment  
              </li>
              
            </ul>
          )}



          
        
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={()=>navigate('/hrdashboard')}>
           HR Dashboard
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={()=>navigate('/employeedetails')} >
           Employee Details
          </li>
          
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer" onClick={()=> navigate('/royalty')}>
            Royalty
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Training Support
          </li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">
            Digital Library
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

