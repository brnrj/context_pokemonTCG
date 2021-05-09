import React, { useContext } from 'react';
import PokeContext from '../context/PokeContext';

function PokeCard() {
  const { loading, fPokes, pokeName } = useContext(PokeContext);
  return (
    <div className="PokeCard">
      {loading ? (
        <p>Loading...</p>
      ) : (
        fPokes.map((item, index) => (
          <div key={index} className={item.types ? item.types[0] : 'Trainer'}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))
      )}
      {!fPokes.length && !pokeName && <p>Escolha seu Pokémon</p>}
    </div>
  );
}

export default PokeCard;
