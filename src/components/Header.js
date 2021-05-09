import React, { useContext } from 'react';
import PokeContext from '../context/PokeContext';
import Logo from '../images/Logo.png';

function Header() {
  const { input, handleChange, handleClick, pokeName, loading } = useContext(PokeContext);

  return (
    <header>
      <img src={Logo} alt="" />
      <input value={input} onChange={handleChange} type="text" />
      <button onClick={() => handleClick(input)} type="button">
        Procurar
      </button>
      {pokeName && !loading && <h3>{pokeName.toUpperCase()}</h3>}
    </header>
  );
}

export default Header;
