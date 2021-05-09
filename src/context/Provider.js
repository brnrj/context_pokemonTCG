import React, { useState } from 'react';
import PokeContext from './PokeContext';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState('');
  const [pokeName, setPokeName] = useState()
  const [loading, setLoading] = useState(false)

    function handleChange({ target }) {
    setInput(target.value);
  }

  function handleClick(input) {
    setLoading(true)
    fetch(`https://api.pokemontcg.io/v1/cards?name=${input}`).then((response) => response.json()).then((data) =>{
      setPokemon([data])
      setLoading(false)
    })
    setInput('')
    setPokeName(input)
  }
  console.log(loading)
  const context = { pokemon, setPokemon, input, setInput, handleChange, handleClick, pokeName, loading };
  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
}

export default Provider;
