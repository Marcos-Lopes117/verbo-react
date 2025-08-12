import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h4>Contato</h4>
          <p>
            AVENIDA CRISTINA, 8 - Sepetiba, RJ
            <br />
            CEP 23545-580
          </p>
          <p>Email: contato@verbosepetiba.com.br</p>
        </div>

        <div className="footer-section social-media">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100093657526886" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} color="#fff" />
            </a>
            <a href="https://www.instagram.com/verbosepetiba" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#fff" />
            </a>
            <a href="https://www.youtube.com/@VerboSepetiba/streams" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} color="#fff" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Igreja Verbo da Vida - Sepetiba. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;