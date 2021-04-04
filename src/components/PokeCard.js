import React, { useContext, useEffect, useState } from 'react';
import PokeContext from '../context/PokeContext';

function PokeCard() {
  const { pokemon } = useContext(PokeContext);
  const [ data , setData ] = useState([])
  
  useEffect(() => {
    if(pokemon.length) {
      const data = pokemon[0].cards
      setData(data)
    }
  },[pokemon])
  return (
    <div className="PokeCard">
      {data.length ? 'POKEMAO' : 'SEM POKEMAO'}
    </div>
  );
}

export default PokeCard;
