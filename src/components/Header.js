import React, { useContext } from 'react';
import PokeContext from '../context/PokeContext';
import Logo from '../images/Logo.png';

function Header() {
  const { input, handleChange, handleClick } = useContext(PokeContext);

  return (
    <header>
      <img src={Logo} alt="" />
      <input value={input} onChange={handleChange} type="text" />
      <button onClick={() => handleClick(input)} type="button">
        Procurar
      </button>
    </header>
  );
}

export default Header;
