import React from 'react';
import '../Styles/Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Developed by: Krishna Kasyap Kanuparthi</p>
        <p>Email:kanuparthikasyap95@gmail.com</p>
        {/* <p>Phone: +91 63030280474</p> */}
        <div className="social-links">
          <a href="www.linkedin.com/in/krishnakasyap" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/kasyap2807" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
