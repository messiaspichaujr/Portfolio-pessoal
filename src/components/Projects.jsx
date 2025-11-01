import React from 'react';
import { motion } from 'framer-motion'; 
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import project1 from '../assets/capa-energetico.png';
import project3 from '../assets/capa-espetinho.png';
import project2 from '../assets/capa-pichauprime.png';
import project4 from '../assets/capa-portal.png';
import '../css/Projects.css';

const projectsData = [
  {
    id: 1,
    image: project1,
    title: 'Energéticos',
    type: 'Hotsite',
    link: 'https://hotsite.pichau.com.br/pichau-energy/'
  },
  {
    id: 2,
    image: project2,
    title: 'Pichau Prime',
    type: 'Hotsite',
    link: 'https://prime.pichau.com.br/'
  },
  {
    id: 3,
    image: project3,
    title: 'Espetinhos',
    type: 'Delivery Digital',
    link: 'https://espetinhodoalemao.com/'
  },
  {
    id: 4,
    image: project4,
    title: 'Portal do aluno',
    type: 'Sistema escolar',
    link: 'https://github.com/mari-catolicasc/portal-do-aluno-cursinho-insercao'
  },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }, 
  },
};

const ProjectCard = ({ image, title, type, link }) => {
  return (
    <motion.a
      href={link}
      className="project-card"
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants} 
    >
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <div className="project-info">
          <h5>{title}</h5>
          <p>{type}</p>
        </div>
        <div className="project-link-button">
          <FiArrowUpRight size={20} />
        </div>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section id="projetos" className="projects-container">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="projects-intro">Portfólio</p>
        <h2 className="projects-title">Meus trabalhos</h2>
        <p className="projects-description">
          Bem-vindo ao meu portfólio de desenvolvimento web!
          Explore uma coleção de projetos que mostram minha expertise em desenvolvimento front-end.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            type={project.type}
            link={project.link}
          />
        ))}
      </motion.div>

      <motion.a
        href="https://github.com/messiaspichaujr?tab=repositories"
        target="_blank"
        className="projects-see-more"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.5 }} 
      >
        Ver mais
        <FiArrowRight size={16} style={{ marginLeft: '8px' }} />
      </motion.a>
    </section>
  );
};

export default Projects;