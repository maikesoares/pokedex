import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <Link to={`/`}>
            <img
              src="../../../src/assets/images/logo-pokemon.png"
              alt="logo pokemon"
            />
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
