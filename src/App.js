import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login/Login';
import Createcustomer from './components/CreateCustomer/Createcustomer';
import CustomerList from './components/CustomerList/CustomerList';
import Browsepopup from './components/CustomerList/Browsepopup';
import Customerdetails from './components/CustomerDetails/Customerdetails';


const App=()=>{

  return(
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/createcustomer' element={<Createcustomer/>}/>
        <Route path='/customerlist' element={<CustomerList/>}/>
        <Route path="/customerdetails" element={<Customerdetails/>}/>
        <Route path="/browsepopup" element={<Browsepopup/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
