import React, { useState } from 'react';
import PokeContext from './PokeContext';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState('');

  const context = { pokemon, setPokemon, input, setInput };
  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
}

export default Provider;
