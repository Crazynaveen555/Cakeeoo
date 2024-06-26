import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Fotter.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <a className='cake-candles' href=""><i class="fa-solid fa-cake-candles"></i></a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
                <a href=""><i class="fa-brands fa-facebook-messenger"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7708043911</li>
                <li>naveencrazy3@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Cakeoo.com - All Right Reserved.</p>
      <h6>Designed by <a href='https://naveenkumar-portfolio.onrender.com/'>Crazynaveen</a></h6>
    </div>
  );
};

export default Footer;
