import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../apis/login'
import SideBar from './SideBar'

const EditUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    const handleClear = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setAge('')
        setPhone('')
        setAddress('')
    }



    const handleSubmit =async (e) => {
        e.preventDefault()
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            age: age,
            phone: phone,
            address: address
        }

        try {
            const result = await createUser(data)
            console.log(result, "res in edit userr")
            navigate('/users')
        } catch (error) {
            console.log(error)
        }
    }

    

  return (
    <>
    <SideBar />
      <div className='container-fluid'>
        <h1 className='h3 mb-4 text-primary '>
          Add Edit User{' '}
          <a className='btn btn-primary float-right add-user' onClick={() => handleBack()}>
            Back
          </a>
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='row'>
            <div className='col-md-9'>
              <div className='card'>
                <div className='card-header'>User Details</div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='first_name'>First Name*</label>
                      <input
                        type='text'
                        className='form-control'
                        id='first_name'
                        name='firstName'
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                      />
                    </div>

                    <div className='form-group col-md-6'>
                      <label htmlFor='last_name'>Last Name*</label>
                      <input
                        type='text'
                        className='form-control'
                        id='last_name'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className='form-group col-md-6'>
                      <label htmlFor='email'>Email*</label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                      />
                    </div>

                    <div className='form-group col-md-6'>
                      <label htmlFor='phone_number'>Phone Number</label>
                      <input
                        type='text'
                        className='form-control'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={phone}
                        onChange={e => setPhone(e.target.value )}
                      />
                    </div>

                    <div className='form-group col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='age'>Age</label>
                        <input
                          type='number'
                          className='form-control'
                          id='age'
                          name='age'
                          value={age}
                          onChange={e => setAge(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className='w-100'>Status</label>
                        <div className='form-check form-check-inline'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='userStatus'
                            id='status_1'
                            value='1'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='status_1'
                          >
                            Enable
                          </label>
                        </div>
                        <div className='form-check form-check-inline'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='userStatus'
                            id='status_0'
                            value='0'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='status_0'
                          >
                            Disable
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className='form-group col-6'>
                      <label htmlFor='address'>Address</label>
                      <textarea
                        name='address'
                        id='address'
                        rows='4'
                        className='form-control'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <div className='card-header'>Action</div>
                <div className='card-body'>
                  <button type='submit' className='btn btn-primary'>
                    Save
                  </button>
                  <button type='reset' className='btn btn-secondary' onClick={() => handleClear()}>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditUser
