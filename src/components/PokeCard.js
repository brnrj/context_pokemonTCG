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
      {data.length ? data.map((item, index) => (
            <div key={index} className="card">
              <h3 className="card-title" key={item.id}>{item.name}</h3>
              <img src={item.imageUrl} alt={item.name}/>
              <p className="card-type" key={item.number}>{item.types}</p>
            </div>
              )) : 'Escolha seu Pokémon'}
    </div>
  );
}

export default PokeCard;
