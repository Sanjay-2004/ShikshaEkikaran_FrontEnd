import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.css'
export default function Contact() {
  return (
    <div>
      <div className="container mt-4" id="contact">
        <h2 className='sub-title'>CONTACT</h2>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <h5 className="card-title">SANJAY AGAMAMIDI</h5>
                    <p className="card-text"><Link className="mails"
                            to="mailto: sanjay.agamamidi@gmail.com">sanjay.agamamidi@gmail.com</Link></p>
                </div>
            </div>
        </div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <h5 className="card-title">UMANG BASUTHKAR</h5>
                    <p className="card-text"><Link className="mails"
                            to="mailto: umangbasuthkar5@gmail.com">umangbasuthkar5@gmail.com</Link></p>
                </div>
            </div>
        </div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <h5 className="card-title">HUZAIF AHMED</h5>
                    <p className="card-text"><Link className="mails"
                            to="mailto: rexhuzaifahmed@gmail.com">rexhuzaifahmed@gmail.com</Link></p>
                </div>
            </div>
        </div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <h5 className="card-title">MARAM NAREN</h5>
                    <p className="card-text"><Link className="mails"
                            to="mailto: maramnaren.09@gmail.com">maramnaren.09@gmail.com</Link></p>
                </div>
            </div>
        </div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <h5 className="card-title">ATHARV TIWARI</h5>
                    <p className="card-text"><Link className="mails" to="mailto: atharvvt14@gmail.com">atharvvt14@gmail.com</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
