import React, { useState, useEffect } from 'react';
import PokeContext from './PokeContext';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState('');
  const [pokeName, setPokeName] = useState();
  const [loading, setLoading] = useState(false);

  function handleChange({ target }) {
    setInput(target.value);
  }

  function handleClick(input) {
    setLoading(true);
    setPokeName(input);
  }

  useEffect(() => {
    if(loading) {
      fetch(`https://api.pokemontcg.io/v1/cards?name=${input}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.cards);
        setLoading(false);
          setInput('');
      });
    }    
  }, [input, loading]);

  const context = {
    pokemon,
    setPokemon,
    input,
    setInput,
    handleChange,
    handleClick,
    pokeName,
    loading,
  };
  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
}

export default Provider;
