import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          Messias<span className="logo-dot">.</span>
        </div>
        <a href="mailto:messiaspichau15@gmail.com" className="footer-email">
          messiaspichau15@gmail.com
        </a>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2025 Messias Pichau. Todos os direitos reservados.</p>
        <a href="https://www.linkedin.com/in/messiaspichaujr/">Conecte-se comigo</a>
      </div>
    </footer>
  );
};

export default Footer;