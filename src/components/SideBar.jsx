import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/undraw_profile.svg'

const SideBar = () => {
  let navigate = useNavigate()

  const handleUser = () => {
    navigate('/users')
  }

  const handleDashboard = () => {
    navigate('/dashboard')
  }

  const handlelogOut = () => {
      navigate('/')
  }

  return (
    <>
      <div id='wrapper'>
        <div className='sidebar'>
          <ul
            className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
            id='accordionSidebar'
          >
            <div className='sidebar-brand-text mx-3'> <span> EMS</span></div>


            <li className='nav-item active' onClick={() => handleDashboard()}>
              <span>Dashboard</span>
            </li>


            <li className='nav-item' onClick={() => handleUser()}>
              <span>Users</span>
            </li>

            <hr className='sidebar-divider' />
          </ul>
        </div>

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content' className='navbar-logout'>
            <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
              <ul className='navbar-nav ml-auto'>
                <div className='topbar-divider d-none d-sm-block'></div>
                <li className='nav-item dropdown no-arrow'>
                  <span className='mr-2 d-none d-lg-inline text-gray-600 small'>
                    Admin
                  </span>
                  <img className='img-profile rounded-circle' src={logo} />
                </li>
                <div className='logout-tag'
                    onClick={() => handlelogOut()}
                  >
                    Logout
                  </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
