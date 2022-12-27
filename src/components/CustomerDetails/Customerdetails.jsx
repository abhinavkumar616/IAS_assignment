import React from 'react'
import "./Customerdetails.css"
import logo from "../../assets/images/logo.jpeg"
import folder from "../../assets/images/folder.svg"
import folder2 from "../../assets/images/folder2.svg"
import pdf from "../../assets/images/pdf.svg"
import word from "../../assets/images/word.svg"
import excel from "../../assets/images/excel.svg"
import view from "../../assets/images/view.svg"
import delete1 from "../../assets/images/delete.svg"
import arrow_back from "../../assets/images/arrow-back.svg"
import { Link } from 'react-router-dom'

const Customerdetails = () => {
    return (
        <>
            <div className='container'>
                <div className='arrow_back'>
                    <Link to="/customerlist"><img src={arrow_back} width="30px" height="30px" alt="" /></Link>
                </div>
                <div className='row col-12'>
                    <div className='row col-6'>
                        <div className='logo'>
                            <img src={logo} width="100px" height="100px" alt="" />
                        </div>
                    </div>
                    <div className='row col-6'>
                        <form className="row gy-2 gx-3">
                            <div className="col-auto ">
                                <button type="submit" className="customer-details-btn">Total Documents Uploaded 15</button>
                            </div>
                            <div className="col-auto ">
                                <button type="submit" className="customer-details-btn">Total Folders 5</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className=''>
                    <form className="row gy-2 gx-3 align-items-center texts">
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control search" id="autoSizingInput" placeholder="Search by Name and Customer Id" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className=" create-folder-btn"><img src={folder} alt="" />  Create Folder</button>
                        </div>
                    </form>

                </div>
                <div className='customerdetails-table'>
                    <table className='table table-striped table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <th>File/Folder Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={folder2} alt="" /> My Docs (5)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><img src={pdf} alt="" /> Pan Card</td>
                                <td>
                                    <div className=''>
                                        <img src={view} alt="" /> <img className="table-view" src={delete1} alt="" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><img src={word} alt="" /> Pan Card</td>
                                <td>
                                    <div className=''>
                                        <img src={view} alt="" /> <img className="table-view" src={delete1} alt="" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><img src={excel} alt="" /> Pan Card</td>
                                <td>
                                    <div className=''>
                                        <img src={view} alt="" /> <img className="table-view" src={delete1} alt="" />
                                    </div>
                                </td>
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

export default Customerdetails
