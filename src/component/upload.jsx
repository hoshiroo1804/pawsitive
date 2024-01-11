import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './upload.css';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FiUploadCloud } from "react-icons/fi";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handlePublish = () => {
    // Logika atau aksi yang ingin dilakukan saat tombol ditekan
    console.log("Publish button clicked!");
    // Tampilkan alert
    setShowAlert(true);

    // Anda dapat menambahkan logika lain atau perubahan state di sini
  };

  const handleCloseAlert = () => {
    // Tutup alert
    setShowAlert(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log('reader.result:', reader.result); // Tambahkan ini
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCloseImage = () => {
    setSelectedImage(null);
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
                  <a className="nav-link" href="#" style={{ color: 'white', fontSize: '18px' }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'white', fontSize: '18px' }}>
                    Publish
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'white' }}>
                    <MdFavoriteBorder size={26} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'white' }}>
                    <MdOutlineAccountCircle size={27} />
                  </a>
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
            {/* Tampilkan gambar di dalam box jika ada yang dipilih */}
            {selectedImage && (
                <>
                <img
                    src={selectedImage}
                    alt="Selected"
                    className="selected-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                </>
            )}
            {/* Input file tetap ada tetapi tidak ditampilkan */}
            <input
                type="file"
                id="myFile"
                name="filename"
                accept="image/*" // Hanya menerima file gambar
                className="file-upload-input"
                onChange={handleFileChange}
                style={{ display: 'block', marginTop:'10px', marginLeft:'100px' }}
            />
            </div>

          {/* Form 1 */}
          <div className="form">
            <form>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Title Of Artwork" />
              </div>
            </form>
          </div>

          {/* Form 2 */}
          <div className="form1">
            <form>
              <input type="text" id="name" name="name" placeholder="Description Of Artwork" />
            </form>
          </div>

          {/* Paragraf */}
          <div>
            <div className="paragraf">
              <p>By Clicking Publish You Have Agreed With Our</p>
              <a href="#" className="styled-link">
                Terms and Conditions
              </a>
            </div>
            <div className="paragraf">
              <button
                type="button"
                className="button-upload"
                style={{ color: 'black' }}
                onClick={handlePublish}
              >
                Publish
              </button>
            </div>
            {/* Alert */}
            {showAlert && (
              <div className="custom-alert" onClick={handleCloseAlert}>
                <img
                  src="/src/icon/ceklist-removebg-preview.png"
                  alt="Your Alt Text"
                  style={{ width: '100%', height: 'auto' }}/>
                <p style={{width:'100%', marginTop: '10px', marginLeft:'8px'}}>Your image is being processed</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="footer-section">
        {/* Konten dari bagian footer */}
        <div className="container">
          <h2>Footer Section</h2>
          {/* Isi konten footer di sini */}
        </div>
      </footer>
    </div>
  );
};

export default Upload;
