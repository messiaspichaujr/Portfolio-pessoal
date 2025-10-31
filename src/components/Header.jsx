import React from 'react';
import { FiMoon, FiSun, FiArrowRight } from 'react-icons/fi'; 
import { useTheme } from '../context/ThemeContext'; 
import '../css/Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-container">
      <div className="logo">
        Messias<span className="logo-dot">.</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
          <li><a href="#" onClick={(e) => handleScroll(e, 'sobre')}>Sobre mim</a></li>
          <li><a href="#" onClick={(e) => handleScroll(e, 'servicos')}>Serviços</a></li>
          <li><a href="#" onClick={(e) => handleScroll(e, 'projetos')}>Projetos</a></li>
          <li><a href="#" onClick={(e) => handleScroll(e, 'contato')}>Contato</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme}> 
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>

        <a 
          href="https://www.linkedin.com/in/messiaspichaujr" 
          className="connect-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conectar
          <FiArrowRight size={16} style={{ marginLeft: '8px' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
