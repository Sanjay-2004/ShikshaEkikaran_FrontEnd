import React from 'react'
import {Link} from 'react-router-dom'

export default function Body() {
  return (
    <div>
      <div className="containers mt-3">
        <h1 className='main-title'>SHIKSHA EKIKARAN</h1>
        <p className='description'>
            Our website focuses on integrating educational data across schools and colleges alike, for the government to
            view, analyse and form policies which could help the education status of the country
        </p>
      </div>
      <div className="containers">
        <div className="row justify-content-sm-center mt-2">
            <div className="col col-lg-5 mt-2">
                <button type="button" className="login mx-5 px-5 py-3" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    LOGIN
                </button>
            </div>
            <div className="col col-lg-5 mt-2">
                <Link to="/register">
                    <button type="button" className="btn mx-5 px-5 py-3 register">REGISTER</button>
                </Link>
            </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className=" modal-dialog modal-dialog-centered">
                <div className="popup modal-content">
                    <div className="popup text-center modal-header">
                        <h1 className="popup text-center modal-title fs-5" id="exampleModalLabel">LOGIN</h1>
                        <button type="button" className="popup btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="popup modal-body">
                        <form className="popup ">
                            <div className="popup mb-3">
                                <label htmlFor="exampleInputEmail" className="popup form-label">Email address</label>
                                <input type="email" placeholder='email' className="color type form-control" id="exampleInputEmail" required/>
                            </div>
                            <div className="popup mb-3">
                                <label htmlFor="exampleInputPassword" className="popup form-label">Password</label>
                                <input type="password" placeholder='8+ characters' className="color type form-control" id="exampleInputPassword" required/>
                            </div>
                            <div className="popup mb-3 ">
                                <a className="popup forgot" href="/">FORGOT PASSWORD?</a>
                            </div><hr/>
                            <div className="popup text-center"><button type="submit" className="login px-3 py-2">Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-md-12 col-lg-4 mt-3">
            <img
              src="https://images.indianexpress.com/2021/09/school-girl.jpg"
              width="100%"
              alt="school"
            />
          </div>
          <div className="col-md-12 col-lg-4 mt-3">
            <img
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/22/756956-shveta-raina-112218.jpg"
              width="100%"
              alt="college"
            />
          </div>
          <div className="col-md-12 col-lg-4 mt-3 mb-3">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-cg2fsdhti048q033cev2jlcq57-20200425013511.Medi.jpeg"
              width="100%"
              alt="grad"
            />
          </div>
        </div>
      </div>

    </div>
    
  )
}
