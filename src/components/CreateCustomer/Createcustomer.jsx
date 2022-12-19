import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.jpeg"
import arrow_back from "../../assets/images/arrow-back.svg"
import "./Createcustomer.css"

const Createcustomer = () => {
    return (
        <div className='container mt-5'>
            <Link type="submit" to="/" style={{ textDecoration: 'none'}}><h2 className='headingarrow'><img src={arrow_back} width="30px" height="30px" alt=""/>Create Customer</h2></Link>

            <div className='row'>
                <div className="col-md-6 col-6 box">
                <div className='row mb-3'>
                        <div className="col-md-6 col-6">
                        <img src={logo} width="100px" height="100px" alt=""/>
                        </div>
                        <div className="col-md-6 col-6">
                        <label htmlFor="formFile" className="form-label">Upload Logo</label>
                        <input className="form-control" type="file" id="formFile" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="companyName" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="companyName" />
                    </div>
                    <div className='row mb-3'>
                        <div className="col-md-6 col-12">
                            <label htmlFor="phoneNumber" className="form-label">Company Phone Number</label>
                            <input type="phone" className="form-control" id="phoneNumber" />
                        </div>
                        <div className="col-md-6 col-12">
                            <label htmlFor="email" className="form-label">Company Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Company Address</label>
                        <textarea className="form-control" id="address" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-md-6 col-12 box">
                    <div className='row mb-3'>
                        <label className="form-label">Company Name</label>
                        <div className="col-md-6 col-12 mb-3">

                            <input type="text" className="form-control" id="firstName" placeholder='First name' />
                        </div>
                        <div className="col-md-6 col-12 mb-3">

                            <input type="text" className="form-control" id="lastName" placeholder='Last name' />
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select defaultValue={'select'} className="form-select" aria-label="Default select example">
                                <option value="select">Select</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <label htmlFor="birthday" className="form-label">Date of Birth</label><br />
                            <input type="date" id="birthday" className="form-control" name="birthday" />
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Email</label>
                            <input type="email" className="form-control" id="phoneNumber" />
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <label htmlFor="email" className="form-label">Phone/Mobile Number</label>
                            <input type="phone" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="notes" className="form-label">Notes</label>
                            <textarea className="form-control" id="notes" rows="4"></textarea>
                        </div>
                    </div>
                </div>
                <button className='btn btn-outline btn-primary w-100 mb-3' type='submit'>Submit</button>
            </div>
        </div>
    )
}

export default Createcustomer
