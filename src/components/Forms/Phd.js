import React from 'react'

export default function Phd() {
  return (
    <div>
      <div className="container" id="phd">
        <h3>P.H.D / M.Phil</h3>
        <form className='form'>
          <div className="row">
            <div className="col">
            <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" id="basic-addon1">
              College's Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <div className="input-group input-group-lg mb-2">
            <span className="input-group-text">Address</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" id="basic-addon1">
                  Established Year
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Year"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" id="basic-addon1">
                  Registration Number
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Reg. Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" id="basic-addon1">
                  University Affiliated to
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Affiliation"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" id="basic-addon1">
                  Number of Students
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" id="basic-addon1">
                  Number of Courses
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Courses"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" id="basic-addon1">
                  Researchers in each Branch
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col">
            <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" id="basic-addon1">College's Mail ID</span>
            <input type="text" className="form-control" placeholder="mail" aria-label="Username"
                aria-describedby="basic-addon1"/>
        </div>
        <hr/>
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" id="basic-addon1">PASSWORD</span>
            <input type="password" className="form-control" placeholder="Enter atleast 8+ characters" aria-label="Username"
                aria-describedby="basic-addon1"/>
        </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn login ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
