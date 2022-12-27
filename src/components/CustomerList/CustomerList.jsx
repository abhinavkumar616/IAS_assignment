import React from 'react'
import "./CustomerList.css"


import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Browsepopup from './Browsepopup';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    return (
        <>
            <div className='container-fluid customer'>

                <div className=' row col-12'>
                    <div className=' row col-3'>
                        <h1 className='customerlist'>Customer List</h1>
                    </div>
                    <div className='row col-9'>
                        <form className="row gy-2 gx-3 align-items-center">
                            <div className="col-auto btn-font">
                                <button type="submit" className="btn  btn-font">Total Customers 500</button>
                            </div>
                            <div className="col-auto btn-font">
                                <button type="submit" className="btn  btn-font">Total Documents Uploaded 500</button>
                            </div>
                            <div className="col-auto btn-font">
                                <button type="submit" className="btn  btn-font">Total Folders</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='customer-table'>
                    <form className="row gy-2 gx-3 align-items-center">
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control search" id="autoSizingInput" placeholder="Search by Name and Customer Id" />
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                            <select className="form-select" id="autoSizingSelect">
                                <option selected>Status</option>
                                <option value="1">Active</option>
                                <option value="2">In-Active</option>
                            </select>
                        </div>
                    </form>
                    <div className="customer-btn text-end">
                        <Link to="/createcustomer" type="submit" className=" btn-form"><PersonAddAltIcon /> Create Customer</Link>
                    </div>
                </div>
                <div className='customer-tableview'>
                    <table className='table table-striped table-hover '>
                        <thead className='table-dark'>
                            <tr>
                                <th>Customer Name</th>
                                <th>Customer Id</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Upload Document</th>
                                <th>Documents Uploaded</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Park</td>
                                <td>#1234556</td>
                                <td>
                                    <div className='active'>Active
                                        <div className="form-check form-switch inactive">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" for="flexSwitchCheckDefault">Inactive</label>
                                        </div>
                                    </div>
                                </td>
                                <td> <Link to="/customerdetails" className='view'>View</Link></td>

                                <td className='text'> <Browsepopup /></td>
                                <td className='text'>5</td>
                            </tr>
                            <tr>
                                <td>John Park</td>
                                <td>#1234556</td>
                                <td>
                                    <div className='active'>Active
                                        <div className="form-check form-switch inactive">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" for="flexSwitchCheckDefault">Inactive</label>
                                        </div>
                                    </div>
                                </td>
                                <td><Link to="/customerdetails" className='view'>View</Link></td>
                                <td className='text'> <Browsepopup /> </td>
                                <td className='text'>5</td>
                            </tr>
                            <tr>
                                <td>John Park</td>
                                <td>#1234556</td>
                                <td>
                                    <div className='active'>Active
                                        <div className="form-check form-switch inactive">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" for="flexSwitchCheckDefault">Inactive</label>
                                        </div>
                                    </div>
                                </td>
                                <td><Link to="/customerdetails" className='view'>View</Link></td>
                                <td className='text'> <Browsepopup /> </td>
                                <td className='text'>5</td>
                            </tr>
                            <tr>
                                <td>John Park</td>
                                <td>#1234556</td>
                                <td>
                                    <div className='active'>Active
                                        <div className="form-check form-switch inactive">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" for="flexSwitchCheckDefault">Inactive</label>
                                        </div>
                                    </div>
                                </td>
                                <td><Link to="/customerdetails" className='view'>View</Link></td>
                                <td className='text'> <Browsepopup /> </td>
                                <td className='text'>5</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div className=''>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination page">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default CustomerList
