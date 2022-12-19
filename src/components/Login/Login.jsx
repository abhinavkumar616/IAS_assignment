import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
    <>
      <div className='container'>
        <div className='form-center'>
          <form className='login-form'>
            <h1>Welcome!</h1>
            <p>We'll never share your email with anyone else.</p>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address' />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <Link type="submit" to="/createcustomer" className="btn btn-primary w-100">Submit</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
