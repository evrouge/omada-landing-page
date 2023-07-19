import React from 'react';
import './styles.css'
import photo from './photos/logo.png'

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Real Estate Company. All rights reserved.</p>
      <img src={photo} alt="popp"></img>
    </footer>
  );
};

export default Footer;
