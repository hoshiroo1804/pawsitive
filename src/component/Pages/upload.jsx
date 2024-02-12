import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { MdFavoriteBorder, MdOutlineAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // Definisikan URL API di dalam komponen Upload
  const API_URL = '/api/uploadfile/';

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handlePublish = async (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    setShowSpinner(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedImage);
      formData.append('title', title);
      formData.append('description', description);

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      console.log('Respons:', response);

      if (response.ok) {
        console.log('Pemrosesan data selesai.');
        setShowSpinner(false);
        navigate('/hasil');
      } else {
        console.error('Gagal mengunggah gambar.');
        setShowSpinner(false);
      }
    } catch (error) {
      console.error('Error selama pengunggahan:', error);
      setShowSpinner(false);
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#FBA1B7' }}>
          <div className="container">
            <Link className="navbar-brand" style={{ color: 'white', fontSize: '28px' }} to="/">
              Pawsitive Detect
            </Link>
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
              <ul className="navbar-nav" style={{marginRight: '-100px'}}>
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
                  <Link to="/profil" className="nav-link" style={{ color: 'white' }}>
                    <MdOutlineAccountCircle size={27} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="body-section">
        <div className="container">
          <h2>Body Section</h2>
          <div className="box">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="selected-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
            <input
              type="file"
              id="myFile"
              name="filename"
              accept="image/*"
              className="file-upload-input"
              onChange={handleFileChange}
              style={{ display: 'block', marginTop: '10px', marginLeft: '100px' }}
            />
          </div>

          <div className="form">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title Of Artwork"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="form1">
            <form>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Description Of Artwork"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </form>
          </div>

          <div>
            <div className="paragraf">
              <p>By Clicking Publish You Have Agreed With Our</p>
              <Link to="#" className="styled-link">
                Terms and Conditions
              </Link>
            </div>
            <div className="paragraf" style={{ position: 'relative', minHeight: '200px' }}>
              {showSpinner ? (
                <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: 0, left: 0, right: 210, bottom: 0 }}>
                  <Spinner animation="border" variant="primary" />
                  <div>
                    <p style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: '13px', marginTop: '5px' }}>Loading. . .</p>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="button-upload"
                  style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  onClick={handlePublish}
                >
                  Publish
                </button>
              )}
            </div>
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

export default Upload;
