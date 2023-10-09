import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTags, faTh } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [photos, setPhotos] = useState([]);
  const [captions, setCaptions] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);


  const handleMessageClick = () => {
    alert('You clicked Message');
  };

  useEffect(() => {
    // Fetch user info from the mock API
    fetch('http://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => setUserInfo(data));

    // Fetch photos grid from the mock API
    fetch('http://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
    
      fetch('https://jsonplaceholder.typicode.com/captions') // Replace 'captions' with the actual endpoint for captions
      .then((response) => response.json())
      .then((data) => setCaptions(data))
      .catch((error) => console.error('Error fetching caption data:', error));

  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="data:image/jpeg;base64,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"
          alt={`${userInfo.name}'s profile`}
          className="profile-image"
        />
        <div className="profile-info">
        <div className="follow-buttons">
            <h3 style={{ fontSize: '30px' }}>virat.kohli</h3>
            <img
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fparspng.com%2Fwp-content%2Fuploads%2F2022%2F07%2Ftickpng.parspng.com-4.png&tbnid=0MgpYQhVfuOOHM&vet=12ahUKEwi0udm0mumBAxWt7DgGHbLLCJ8QMygFegQIARB3..i&imgrefurl=https%3A%2F%2Fparspng.com%2Fen%2Fimages%2Fpng-blue-tick%2F&docid=1xHtJMQb_MMD7M&w=1500&h=1500&q=blue%20tick%20png&ved=2ahUKEwi0udm0mumBAxWt7DgGHbLLCJ8QMygFegQIARB3" // Replace with your Instagram logo image URL
          alt="blue-tick"
        />
        </div>
        
          <div className="follow-buttons">
            {/* <button className="follow-button">Follow</button> */}
            <div className="follow-buttons">
            <button
          className="follow-button"
          onClick={() => setIsFollowing(!isFollowing)}
          style={{
            backgroundColor: isFollowing ? 'white' : "#3897f0",
            color: isFollowing ? 'black' : 'white',
            width: '170px',  
            height: '50px',  
            fontSize: '26px',  
          }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
            {/* <button className="message-button">Message</button> */}
            <button className="message-button" onClick={handleMessageClick}
            style={{
            width: '170px',
            height: '50px',  
            fontSize: '26px', 
          }}>Message
            </button>
        </div>
        </div>
      </div>
      
      <div className="bio"><h3>Virat Kohli</h3>
      </div>
      
      <div className="bio"><h3>Carpedim!</h3>
      </div>
      <br></br>
      <div className="profile-stats">
        <div className="stat">
          <span>{photos.length}</span>
          <br></br>
          <span>Posts</span>
        </div>
        <div className="stat">
          <span>260M</span>
          <br></br>
          <span>Followers</span>
        </div>
        <div className="stat">
          <span>289</span>
          <br></br>
          <span>Following</span>
        </div>
      </div>
      <hr></hr>
      <div className="section_tab">
        <div className="stat">
          <span><FontAwesomeIcon icon={faTh} size="2x"/></span><br></br>
          <span>Posts</span>
        </div>
        <div className="stat">
          <span><FontAwesomeIcon icon={faCamera} size="2x" /></span><br></br>
          <span>Reel</span>
        </div>
        <div className="stat">
          <span><FontAwesomeIcon icon={faTags} size="2x"/></span><br></br>
          <span>Tagged</span>
        </div>
      </div>
      {/* <div className="profile__section__tab">
            <FontAwesomeIcon icon={faTh} size="2x"/>
            <h3>Posts</h3>
            <FontAwesomeIcon icon={faCamera} size="2x" /> 
            <h3>Reel</h3>
            <FontAwesomeIcon icon={faTags} size="2x"/> <h3>Tagged</h3>
          
        </div> */}
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p className="caption">{captions[photo.id]}</p>
          </div>
        ))}
        
      </div>
      
    </div>

  );
};

export default Profile;
