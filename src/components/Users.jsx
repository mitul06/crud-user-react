import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteUser, getAllUser } from '../apis/login'
import SideBar from './SideBar'

const Users = () => {
  const [state, setstate] = useState(null)

  let navigate = useNavigate()

  const handleEditUser = () => {
    navigate('/edituser')
  }

  const handleEdit = () => {
    navigate('/edituser')
  }

  const handleDelete = async id => {
    const deleteUserData = await deleteUser(id)
    console.log(deleteUserData, 'delete')
  }

  useEffect(async () => {
    const result = await getAllUser()
    setstate(result)
  }, [])

  return (
    <>
      <SideBar />
      <div className='container-fluid'>
        <h1 className='h3 mb-4 text-primary'>
          Users{' '}
          <button
            className='btn btn-primary float-right add-user'
            onClick={() => handleEditUser()}
          >
            Add New
          </button>
        </h1>
        <table className='table table-bordered bg-white'>
          <thead>
            <tr>
              <th scope='col' className='text-center' style={{ width: '50px' }}>
                #
              </th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Create Date</th>
              <th scope='col' className='text-center' style={{ width: '50px' }}>
                Status
              </th>
              <th scope='col' className='text-center' style={{ width: '85px' }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {state?.data.data.map((value, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td>{value?.createdAt}</td>
                  <td className='text-center'>Success</td>
                  <td className='text-center'>
                      <div className='action-btn'>
                    <button onClick={() => handleEdit()}>Edit</button>
                    <button onClick={() => handleDelete(value.id)}>
                      Delete
                    </button>
                      </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li className='page-item disabled'>
              <a className='page-link' href='#' aria-label='Previous'>
                <span aria-hidden='true'>&laquo;</span>
                <span className='sr-only'>Previous</span>
              </a>
            </li>
            <li className='page-item active'>
              <a className='page-link' href='#'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                2
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#' aria-label='Next'>
                <span aria-hidden='true'>&raquo;</span>
                <span className='sr-only'>Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Users
