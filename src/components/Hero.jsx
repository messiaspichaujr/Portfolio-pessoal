import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import avatar from '../assets/avatar.png';
import '../css/Hero.css'; // Mantenha seu import do CSS

import Ballpit from './Ballpit';
import { useIsMobile } from '../hooks/usIsMobile';

const Hero = () => {

  const isMobile = useIsMobile();

  return (
    <section className="hero-container">

      {!isMobile && (
        <div className="ballpit-background">
          <Ballpit
            count={80}
            gravity={0}
            friction={0.98}
            wallBounce={1}
            followCursor={true}
          />
        </div>
      )}
      
      <div className="hero-foreground">
        <motion.img
          src={avatar}
          alt="Messias"
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Olá! Me chamo Messias
        </motion.p>

        <motion.h4
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Desenvolvedor Full Stack
        </motion.h4>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <a
            href="https://www.linkedin.com/in/messiaspichaujr"
            className="hero-button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            conecte-se comigo
            <FiArrowRight size={16} style={{ marginLeft: '8px' }} />
          </a>
          <a
            href="/Curriculo-MessiasPichau.pdf"
            className="hero-button-secondary"
            download
          >
            Currículo
            <FiDownload size={16} style={{ marginLeft: '8px' }} />
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;