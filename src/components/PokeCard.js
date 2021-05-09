import React, { useContext, useEffect, useState } from 'react';
import PokeContext from '../context/PokeContext';

function PokeCard() {
  const { pokemon, loading } = useContext(PokeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (pokemon.length) {
      const data = pokemon[0].cards;
      setData(data);
    }
  }, [pokemon]);
  return (
    <div className="PokeCard">
      {loading ? (
        <p>Loading...</p>
      ) : data.length ? (
        data.map((item, index) => (
          <div key={index} className={item.types ? item.types[0] : 'Trainer'}>
            <img src={item.imageUrl} alt={item.name} />
            {/* <p className="card-type" key={item.number}>{item.types}</p> */}
          </div>
        ))
      ) : (
        <p>Escolha seu Pokémon</p>
      )}
    </div>
  );
}

export default PokeCard;
