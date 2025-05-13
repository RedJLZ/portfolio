import {useEffect, useState} from 'react';
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa';
import './styles.css';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('side-menu');
      const toggleBtn = document.querySelector('.menu-toggle');

      if (
        nav &&
        toggleBtn &&
        !nav.contains(event.target as Node) &&
        !toggleBtn.contains(event.target as Node)
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>

      <nav id="side-menu" className={menuActive ? 'active' : ''}>
        <img
          id="photo-image"
          src="/src/assets/profile.jpg"
          alt="Foto de perfil"
        />
        <div className="social-icons">
          <a
            href="https://github.com/RedJLZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/RedJLZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
