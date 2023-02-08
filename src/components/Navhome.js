import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Styles.css'
export default function Navhome() {
  return (
    <div>
      <nav className="navbar  navbar-expand-md justify-content-center">
        <div className="container-fluid">
            <Link className="navbar-brand ms-2" to='/'>
                <img src="main.png" alt="SHIKSHA EKIKARAN" height="80px"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item px-2 mx-5">
                        <Link className="nav-link active" to='/'>HOME</Link>
                    </li>
                    <li className="nav-item px-2 mx-5">
                        <Link className="nav-link active" to="/about">ABOUT US</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link className="nav-link active" to="/contact">CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav><Outlet/>
    </div>
  )
}
