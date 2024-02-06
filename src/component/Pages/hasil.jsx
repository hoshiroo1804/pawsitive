import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';
import '../../styles/upload.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hasil = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [artworkData, setArtworkData] = useState([]);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch('https://apis.server05.my.id/getfileai/ai');
      const data = await response.json();
      setArtworkData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePublish = () => {
    console.log("Publish button clicked!");
    // Additional logic or state changes can be added here
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log('reader.result:', reader.result);
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Assume you have a function handleImageClick to handle the click event
  const handleImageClick = (imageUrl) => {
    console.log('Image clicked:', imageUrl);
    // Add logic to handle image click
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
          <div className="meja-container">
            <table className="box1">
              <tbody>
                {artworkData.map((artwork, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={artwork.imageUrl} // Assuming there is an 'imageUrl' property in your artwork data
                        alt={`Uploaded Image ${index}`}
                        style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                        onClick={() => handleImageClick(artwork.imageUrl)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="meja-container">
            <table className="meja">
              {/* ID */}
              <thead>
                <tr>
                  <th style={{ fontWeight: 'normal' }}>Placeholder for ID</th>
                </tr>
              </thead>
              <tbody>
                {artworkData.map((artwork) => (
                  <tr key={artwork.id}>
                    <td>{artwork.id}</td>
                  </tr>
                ))}
              </tbody>
              {/* Title */}
              <thead>
                <tr>
                  <th style={{ fontWeight: 'normal' }}>Title</th>
                </tr>
              </thead>
              <tbody>
                {artworkData.map((artwork) => (
                  <tr key={artwork.id}>
                    <td>{artwork.title}</td>
                  </tr>
                ))}
              </tbody>
              {/* Description */}
              <thead>
                <tr>
                  <th style={{ fontWeight: 'normal' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {artworkData.map((artwork) => (
                  <tr key={artwork.id}>
                    <td>{artwork.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="paragraf1">
            <div className='button-upload1'>
                <Link to="/profil"style={{ color: 'rgba(0, 0, 0, 0.6)'}} >
                    Home
                </Link>
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

export default Hasil;
