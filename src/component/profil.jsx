import React, { useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';
import './profil.css';
import './upload.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Profile = () => {

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#FBA1B7' }}>
          <div className="container">
            <a className="navbar-brand" style={{ color: 'white', fontSize: '28px' }}>
              Pawsitive Detect
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/hasil" className="nav-link" style={{ color: 'white', fontSize: '18px' }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/upload" className="nav-link" style={{ color: 'white', fontSize: '18px' }}>
                    Publish
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hasil" className="nav-link" style={{ color: 'white' }}>
                    <MdFavoriteBorder size={26} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/upload" className="nav-link" style={{ color: 'white' }}>
                    <MdOutlineAccountCircle size={27} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section> 
      <div className="container">
        {/* Navbar sudah ada di atas, tambahkan konten berikut untuk box body */}
        <div className="kotak-poto">
          <h2>Welcome to Pawsitive Detect</h2>
          <p>This is the body content of your page.</p>
        </div>
      </div>
    </section>

      <footer className="footer-section">
            <MDBFooter className=' text-center text-white' style={{backgroundColor:'pink'}}>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright: Pawsitive
                </div>
                </MDBFooter>
      </footer>
    </div>
  );
};

export default Profile;
