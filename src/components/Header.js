import React, { useContext } from 'react';
import PokeContext from '../context/PokeContext';
import Logo from '../images/Logo.png';
function Header() {
  const { input, setInput, setPokemon } = useContext(PokeContext);

  function handleChange({ target }) {
    setInput(target.value);
  }

  async function handleClick(input) {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?name=${input}`
    );
    const poke = await data.json();
    setPokemon([poke]);
  }
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
