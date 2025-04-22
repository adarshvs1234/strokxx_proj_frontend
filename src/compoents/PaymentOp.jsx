import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentOp = () => {

  const navigate = useNavigate()

  return (
    
    
      <>
        <h2 className="text-2xl font-bold mb-20">Select Payment Method</h2>
        
        <div className="space-y-4 ">
            
          <button className="w-full bg-gray-200 text-w-full bg-gray-200 flex items-center text-left text-dark py-3 rounded hover:bg-gray-300 transition px-4 text-dark py-3 rounded hover:bg-gray-300 transition pl-3 " onClick={()=> navigate('/card')}>
            <img width="50" height="50" src='https://img.icons8.com/ios-glyphs/30/bank-card-back-side.png'  className='mr-5'  alt='card' />
          Cards
        
          </button>

          <button className="w-full bg-gray-200 flex items-center text-left text-dark py-3 rounded hover:bg-gray-300 transition px-4 ">
          <img src='https://img.icons8.com/glyph-neue/50/1A1A1A/bhim.png' className='mr-6' alt='UPI'/>
            UPI
        </button>


          <div>
  <button className="w-full bg-gray-200 flex items-center text-left text-dark py-3 rounded hover:bg-gray-300 transition px-4 pb-4 pt-3">
  <img  src='https://cdn-icons-png.flaticon.com/256/2639/2639659.png' width="50" height="50" alt='Net Banking' className='w-[50px] h-[50px]   w-7 h-7 mr-6 object contain'/>
   Net Banking
  </button>
</div>

    </div>
        </>
    
  );
};

export default PaymentOp;

