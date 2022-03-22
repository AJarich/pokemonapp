import React from 'react';

export default function PokemonList({pokemon}){
  return (
    <div>
      {pokemon.map(p => (
        <div key={p.name}><span>Name: {p.name}</span><br />
        <span>Height: {p.height}</span><br /><br/></div>

      ))}
    </div>
  );
}
