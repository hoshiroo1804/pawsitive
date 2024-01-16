import React, { useState, useEffect } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiUploadCloud } from 'react-icons/fi';
import { FaCheck, FaRegEdit } from 'react-icons/fa';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './profil.css';
import './upload.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Profile = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [username, setUsername] = useState('Username');
  const [description, setDescription] = useState('Custom Description by user');

  // Mengambil data gambar dari localStorage saat komponen dimount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('profileImages')) || [];
    setImages(storedImages);
  }, []);

  const saveImagesToLocalStorage = (newImages) => {
    localStorage.setItem('profileImages', JSON.stringify(newImages));
  };

  const uploadImageToApi = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('https://example.com/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image to API');
      }

      const responseData = await response.json();
      return responseData.imageUrl;
    } catch (error) {
      console.error('Error uploading image to API:', error.message);
      throw error;
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      try {
        const imageUrl = await uploadImageToApi(file);
        const newImages = [...images, imageUrl];
        setImages(newImages);
        saveImagesToLocalStorage(newImages);
      } catch (error) {
        alert('Failed to upload image to API.');
      }
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    saveImagesToLocalStorage(newImages);
  };

  const handleImageSelect = (index) => {
    setSelectedImage(images[index]);
  };

  const handleUsernameUpdate = () => {
    const newUsername = prompt('Enter new username:', username);
    if (newUsername !== null) {
      setUsername(newUsername);
    }
  };

  const handleDescriptionUpdate = () => {
    const newDescription = prompt('Enter new description:', description);
    if (newDescription !== null) {
      setDescription(newDescription);
    }
  };

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
        <div className="body-profile">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '150px' }}
            />
          ) : null}

          {/* Formulir CRUD gambar */}
          <div>
            <p style={{ marginRight: '30px', color: 'rgba(0, 0, 0, 0.6) !important' }}>Upload your picture here</p>
            <label htmlFor="image-upload" className="upload-icon-label">
              <FiUploadCloud className="upload-icon" size={0} />
            </label>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />

            {images.length > 0 && (
              <div>
                <ul>
                  {images.map((image, index) => (
                    <li key={index}>
                      <button onClick={() => handleImageSelect(index)} className='upload-icon-label'>
                        <FaCheck />
                      </button>
                      <button onClick={() => handleImageDelete(index)} className="button-delete">
                        <BsFillBackspaceFill />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="body-kotak">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ maxWidth: '200px', maxHeight: '200px', overflow: 'hidden', borderRadius: '50%', marginTop: '5px', marginLeft: '10px' }}>
              <img
                src="/src/icon/profile-removebg-preview.png"
                alt="Welcome Image"
                style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'grey', borderRadius: '50%' }}
              />
            </div>
              <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                <button onClick={handleUsernameUpdate} style={{ backgroundColor: '#FFD1DA', border: 'white', marginRight: '10px', color: 'rgba(0, 0, 0, 0.6)' }}>
                  <FaRegEdit /> 
                </button>
                <button onClick={handleDescriptionUpdate} style={{ backgroundColor: '#FFD1DA', border: 'white',marginTop:'5px', display: 'flex', color: 'rgba(0, 0, 0, 0.6)'}}>
                  <FaRegEdit /> 
                </button>
              </div>
            <div style={{  marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h2 style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{username}</h2>
              <p style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.6)' }}>{description}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <MDBFooter className=' text-center text-white' style={{ backgroundColor: 'pink' }}>
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
