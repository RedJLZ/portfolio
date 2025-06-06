import logo from '../../assets/logo1.jpg';
import './styles.css';

const Header = () => {
  return (
    <section id="home" className="hero">
      <img src={logo} alt="Logo" className="hero-img" />
      <div className="hero-content">
        <h1 className="title"></h1>
        <p className="title"></p>
      </div>
    </section>
  );
};

export default Header;
