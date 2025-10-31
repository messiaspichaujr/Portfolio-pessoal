import React from 'react';
import aboutMePhoto from '../assets/avatar.png';
import { FaFigma } from "react-icons/fa6";
import { FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { FaGitAlt } from "react-icons/fa6";
import { SiIntellijidea } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import '../css/About.css';

const About = () => {
  return (
    <section id="sobre" className="about-container">
      <p className="about-intro">Introdução</p>
      <h2 className="about-title">Sobre Mim</h2>

      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={aboutMePhoto} alt="Messias Pichau" className="about-image" />
        </div>

        <div className="about-details">
          <p className="about-description">
            Me chamo Messias Pichau, tenho 23 anos e sou desenvolvedor full stack com experiência em
            tecnologias modernas de front end e back end. Domínio de HTML, CSS, JavaScript, React, Vue e
            Node.js, além de conhecimento em linguagens de banco de dados relacionais e não-relacionais.
            Apaixonado por criar interfaces intuitivas e soluções completas para web.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <FaCode className="card-icon" />
              <h5>Linguagens</h5>
              <p>HTML, CSS, JavaScript, React, Vue.js, Node, Java, MySQL e Wordpress</p>
            </div>
            <div className="about-card">
              <FaGraduationCap className="card-icon" />
              <h5>Educação</h5>
              <p>Bacharel em engenharia de software</p>
            </div>
            <div className="about-card">
              <FaBriefcase className="card-icon" />
              <h5>Projetos</h5>
              <a href="https://github.com/messiaspichaujr" target="_blank">Clique Aqui</a>
            </div>
          </div>

          <div className="about-tools">
            <h4>Ferramentas que utilizo</h4>
            <div className="tools-icons">
              <VscVscode title="Visual Studio Code" />
              <SiIntellijidea title="IntelliJ IDEA" />
              <SiJira title="Jira" />
              <FaFigma title="Figma" />
              <SiMysql title="MySQL" />
              <FaGitAlt title="Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;