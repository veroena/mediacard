import React from 'react';
// import logo from './logo.svg';
import './App.scss';

const MediaCard = ({userName, userImage, userDate, userInfo, userLikes, heartClass }) => 
      <div className="App">
        <div className="container">
          <header className="header">
          <img className="image" src={userImage} alt=""/>
            <div className="user-info">
              <h1 className="username">{userName}</h1>
              <p className="date">{userDate}</p>
            </div>
          </header>
          <main>
            <p className="description">{userInfo}</p>
          </main>
          <footer className="footer">
            <a href="/" className="link">Leer más...</a>
            <div className="likes">
              <p className="counter">{userLikes}</p>
              <i className={heartClass}></i>
            </div>
          </footer>
        </div>
      </div>
      
export default MediaCard;