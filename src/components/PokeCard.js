import React, { useContext } from 'react';
import PokeContext from '../context/PokeContext';

function PokeCard() {
  const { loading, pokemon } = useContext(PokeContext);
  return (
    <div className="PokeCard">
      {loading ? (
        <p>Loading...</p>
      ) : pokemon.length ? (
        pokemon.map((item, index) => (
          <div key={index} className={item.types ? item.types[0] : 'Trainer'}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))
      ) : (
        <p>Escolha seu Pokémon</p>
      )}
    </div>
  );
}

export default PokeCard;
