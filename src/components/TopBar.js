import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" 
          alt="Instagram Logo"
        />
      </div>
      <div className="top-bar__search">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </div>
      <div className="top-bar__icons">
        <span className="icon">
          <img
            src="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
            alt="Explore"
          />
        </span>
        <span className="icon">
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.iconpacks.net%2Ficons%2F2%2Ffree-heart-icon-3510-thumb.png&tbnid=4g8i44a9KBNvQM&vet=12ahUKEwiypvOknOmBAxXp5TgGHepXDvcQMygAegQIARAt..i&imgrefurl=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fheart-3510.html&docid=ngfEizFHLdBHGM&w=512&h=512&q=heart-icon.png&ved=2ahUKEwiypvOknOmBAxXp5TgGHepXDvcQMygAegQIARAt" // Replace with your heart icon image URL
            alt="Notifications"
          />
        </span>
        <span className="icon">
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1144%2F1144760.png&tbnid=A_c-1RPK90rYoM&vet=12ahUKEwiO3Ii5nOmBAxXS5zgGHYBkDX4QMygAegQIARAt..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ficons%2Fprofile&docid=W6mFf3gecH_XtM&w=512&h=512&q=profile-icon.png&ved=2ahUKEwiO3Ii5nOmBAxXS5zgGHYBkDX4QMygAegQIARAt" // Replace with your profile icon image URL
            alt="Profile"
          />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
