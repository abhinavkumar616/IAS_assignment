import React from 'react'
import logo from "../../assets/images/ias-Logo.png"
import "./Header.css"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg background">
                <img className='ias-logo' src={logo} alt="" />
                <div className="container-fluid">
                    <a className="navbar-brand title" href="/"><h3>Indo Aerospace Solutions Pvt. Ltd. (IAS)</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        
                </div>
            </nav>
        </>
    )
}

export default Header
