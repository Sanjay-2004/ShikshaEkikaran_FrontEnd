import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Govt() {
  return (
    <>
    <div className=" header container-fluid">
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-evenly">
            <Link className="navbar-brand" to="/">
                <img src="logo1.png" alt="LOGO" width="50%"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link mx-4 insts" to="schools">SCHOOLS</Link>
                    <Link className="nav-link mx-4 insts" to="intermediate">INTERMEDIATE</Link>
                    <Link className="nav-link mx-4 insts" to="polytechnic">POLYTECHNIC</Link>
                    <Link className="nav-link mx-4 insts" to="undergraduate">UNDERGRAD</Link>
                    <Link className="nav-link mx-4 insts" to="postgraduate">POSTGRAD</Link>
                    <Link className="nav-link mx-4 insts" to="phd">PHD</Link>
                    <button className="btn btn-green mx-4" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        FILTERS
                    </button>
                    <div className="btn-group dropstart">
                        <button type="button" className="profile py-2 ms-4 dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            PRO
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">PROFILE</a></li>
                            <li><a className="dropdown-item" href="#">CHANGE PASSWORD</a></li>
                            <li><a className="dropdown-item" href="#">SETTINGS</a></li><hr/>
                            <li><a className="dropdown-item" href="#">LOG OUT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>

<div className="offcanvas filter offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h3 className="offcanvas-title" id="offcanvasExampleLabel">CONTENT</h3>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <center><div className="dropdown-center ">
      <button className="btn state login py-3 px-0 dropdown-toggle" type="button" data-bs-toggle="dropdown">
        STATES
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item px-5" href="#">Andhra Pradesh</a></li>
        <li><a className="dropdown-item px-5" href="#">Arunachal Pradesh</a></li>
        <li><a className="dropdown-item px-5" href="#">Assam</a></li>
        <li><a className="dropdown-item px-5" href="#">Bihar</a></li>
        <li><a className="dropdown-item px-5" href="#">Chhattisgarh</a></li>
        <li><a className="dropdown-item px-5" href="#">Goa</a></li>
        <li><a className="dropdown-item px-5" href="#">Gujarat</a></li>
        <li><a className="dropdown-item px-5" href="#">Haryana</a></li>
        <li><a className="dropdown-item px-5" href="#">Himachal Pradesh</a></li>
        <li><a className="dropdown-item px-5" href="#">Jammu and Kashmir</a></li>
        <li><a className="dropdown-item px-5" href="#">Jharkhand</a></li>
        <li><a className="dropdown-item px-5" href="#">Karnataka</a></li>
        <li><a className="dropdown-item px-5" href="#">Kerala</a></li>
        <li><a className="dropdown-item px-5" href="#">Madhya Pradesh</a></li>
        <li><a className="dropdown-item px-5" href="#">Maharashtra</a></li>
        <li><a className="dropdown-item px-5" href="#">Manipur</a></li>
        <li><a className="dropdown-item px-5" href="#">Meghalaya</a></li>
        <li><a className="dropdown-item px-5" href="#">Mizoram</a></li>
        <li><a className="dropdown-item px-5" href="#">Nagaland</a></li>
        <li><a className="dropdown-item px-5" href="#">Odisha</a></li>
        <li><a className="dropdown-item px-5" href="#">Punjab</a></li>
        <li><a className="dropdown-item px-5" href="#">Rajasthan</a></li>
        <li><a className="dropdown-item px-5" href="#">Sikkim</a></li>
        <li><a className="dropdown-item px-5" href="#">Tamil Nadu</a></li>
        <li><a className="dropdown-item px-5" href="#">Telangana</a></li>
        <li><a className="dropdown-item px-5" href="#">Tripura</a></li>
        <li><a className="dropdown-item px-5" href="#">Uttar Pradesh</a></li>
        <li><a className="dropdown-item px-5" href="#">Uttarakhand</a></li>
        <li><a className="dropdown-item px-5" href="#">West Bengal</a></li>
      </ul>
    </div>
    <form className="pt-4 pe-4">
      <span className="fs-5 pe-4 me-4">FROM:</span><input className="text-center dates py-1 ps-3 mb-2" type="date" id="From"/><br/>
      <span className="fs-5 pe-4 me-4">TO:  </span><input className="text-center dates py-1 ps-3" type="date" id="To"/>
    </form><hr/>
    <p className="pt-4 fs-4">FILTERS</p>
    <ul className="list-group">
                    <li className="filters list-group-item fs-6"><a className="filters link-dark" href="#">CASTE</a></li>
                    <li className="filters list-group-item fs-6"><a className="filters link-dark" href="#">GENDER</a></li>
                    <li className="filters list-group-item fs-6"><a className="filters link-dark" href="#">PHYSICALLY DISABLED</a></li>
                    <li className="filters list-group-item fs-6"><a className="filters link-dark" href="#">SUBJECTS</a></li>
                    <li className="filters list-group-item fs-6"><a className="filters link-dark" href="#">BOARD</a></li>
                </ul>
    <div className="btn btn-dark mt-4" >DOWNLOAD</div>
    </center></div>
</div><Outlet/>
    </>
  )
}
