import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-pokemon.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <Link to={`/`}>
            <img src={logo} alt="logo pokemon" />
          </Link>
        </nav>
        <div className="circulo-externo">
          <div className="circulo-interno"></div>
        </div>
      </header>
    </>
  );
};

export { Header };
