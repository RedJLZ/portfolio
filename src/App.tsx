import {useEffect} from 'react';
import './App.css';
import CardSection from './components/card/Card';
import Footer from './components/menu/Footer';
import Header from './components/menu/Header';
import NavBar from './components/menu/NavBar';

import {experienceAsCardItems} from './utils/convertExperience';
import {projectItems} from './utils/data';

const App = () => {
  useEffect(() => {
    const textArray = ['Jose Zambrano', 'Frontend Developer'];
    const elementH1 = document.querySelector('h1');
    const elementP = document.querySelector('p');
    let currentTextH1 = '';
    let currentTextP = '';
    let isDeleting = false;

    function typeBoth() {
      const wordH1 = textArray[0];
      const wordP = textArray[1];

      if (isDeleting) {
        currentTextH1 = wordH1.substring(0, currentTextH1.length - 1);
        currentTextP = wordP.substring(0, currentTextP.length - 1);
      } else {
        currentTextH1 = wordH1.substring(0, currentTextH1.length + 1);
        currentTextP = wordP.substring(0, currentTextP.length + 1);
      }

      if (elementH1) elementH1.textContent = currentTextH1;
      if (elementP) elementP.textContent = currentTextP;

      if (!isDeleting && currentTextH1 === wordH1 && currentTextP === wordP) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && currentTextH1 === '' && currentTextP === '') {
        isDeleting = false;
      }

      setTimeout(typeBoth, isDeleting ? 100 : 150);
    }

    typeBoth();
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <main id="main-content">
        <p className="description">
          Desarrollador Front-End con experiencia en aplicaciones móviles
          bancarias y plataformas web de envío de remesas. Me destaco por mi
          capacidad de adaptación, pensamiento analítico y habilidad para
          resolver desafíos técnicos en entornos exigentes. Apasionado por el
          desarrollo móvil y la creación de interfaces modernas, intuitivas y
          escalables. Comprometido con las buenas prácticas de desarrollo, la
          mejora continua y la entrega de soluciones de alto impacto
        </p>
        <CardSection
          id="experiencia"
          heading="Experiencia Laboral"
          items={experienceAsCardItems}
        />
        <CardSection id="proyectos" heading="Proyectos" items={projectItems} />
      </main>
      <Footer />
    </>
  );
};

export default App;
