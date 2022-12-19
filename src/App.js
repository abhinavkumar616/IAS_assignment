import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login/Login';
import Createcustomer from './components/CreateCustomer/Createcustomer';


const App=()=>{

  return(
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/createcustomer' element={<Createcustomer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
