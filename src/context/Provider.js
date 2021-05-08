import React, { useState } from 'react';
import PokeContext from './PokeContext';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState('');
  const [pokeName, setPokeName] = useState()
  function handleChange({ target }) {
    setInput(target.value);
  }

  async function handleClick(input) {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?name=${input}`
    );
    const poke = await data.json();
    setPokemon([poke]);
    setInput('')
    setPokeName(input)
  }

  const context = { pokemon, setPokemon, input, setInput, handleChange, handleClick, pokeName };
  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
}

export default Provider;
