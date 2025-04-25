import React from 'react'
import {BrowserRouter, Route,  Routes} from "react-router-dom"
import PaymentPage from '../pages/PaymentPage'
import EmiPage from '../pages/EmiPage'
import Layout from '../compoents/Layout'
import EmployeePage from '../pages/EmployeePage'
import PayOp from '../pages/PayOp'
import CardPayPage from '../pages/CardPayPage'
import RoyaltyPage from '../pages/RoyaltyPage'
import EditPage from '../pages/EditPage'
import AddEmpPage from '../pages/AddEmpPage'
import LoginPage from '../pages/LoginPage'



const Index = () => {
  
  return (
    <>
    <BrowserRouter>
   <Layout>
    <Routes>
  
    <Route path='/payment' element={<PaymentPage/>}/>
    <Route path='/emi' element={<EmiPage/>}/>
    <Route path='/employeedetails' element={<EmployeePage/>}/>
    <Route path='/paymentOptions' element={<PayOp/>}/>
    <Route path='/card' element={<CardPayPage/>}/>
   
    <Route path='/employee/:id/edit' element={<EditPage/>}/>
    <Route path='/addemployee' element={<AddEmpPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>


    <Route path='/calculate' element={<RoyaltyPage/>}/>
    
    <Route path='/status/:franchiseId' element={<RoyaltyPage/>}/>

</Routes>
   
    
</Layout>
    </BrowserRouter>
    </>
  )
}

export default Index


