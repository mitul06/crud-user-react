import React, { useState } from 'react'
import { loginApp } from '../apis/login'
import {
  useNavigate,
} from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: userName,
      password: password
    }

    console.log(data, "data")

    try {
      const res = await loginApp(data) 
      navigate('/dashboard') 
      console.log(res, 'res')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-5 col-md-9'>
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-4'>Welcome Back!</h1>
                      </div>
                      <form className='user' onSubmit={(e) => handleSubmit(e)} >
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control form-control-user'
                            id='userName'
                            placeholder='Username'
                            value={userName}
                            onChange={(e) => {setUserName(e.target.value)}}
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type='password'
                            className='form-control form-control-user'
                            id='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                          />
                        </div>
                        <button
                          className='btn btn-primary btn-user btn-block'
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
