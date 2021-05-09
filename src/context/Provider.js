import React, { useState, useEffect } from 'react';
import PokeContext from './PokeContext';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState('');
  const [pokeName, setPokeName] = useState();
  const [loading, setLoading] = useState(false);
  const [fPokes, setFPokes] = useState([])
  function handleChange({ target }) {
    setInput(target.value);
  }

  function clearPokemonNames(pokemon, pokeName) {
    let name = pokeName.charAt(0).toUpperCase() + pokeName.slice(1, pokeName.length)
    let data = pokemon.map((element) => {
      let nameSplited = element.name.split(/[\s-]+/)
      return nameSplited.includes(name) ? element : null
    }).filter((value) => value !== null)
    setFPokes(data);
  }

  function handleClick(input) {
    setLoading(true);
    setPokeName(input);
  }
  
  useEffect(() => {
    if (loading) {
      fetch(`https://api.pokemontcg.io/v1/cards?name=${input}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data.cards);
          setLoading(false);
          setInput('');
          clearPokemonNames(pokemon, pokeName)
        });
    }
  }, [input, loading, pokemon, pokeName]);

  const context = {
    pokemon,
    setPokemon,
    input,
    setInput,
    handleChange,
    handleClick,
    pokeName,
    loading,
    fPokes
  };
  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
}

export default Provider;
