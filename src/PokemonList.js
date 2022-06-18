import React from 'react';

export default function PokemonList({pokemon}){
  return (
    <div class="card-deck row mx-3 p-3">
      {pokemon.map(p => (
        <div class="col-sm-3 my-2 p-2">
        <div class="card">
          <div class={p.types[0].type.name}>
            <img class="card-top-img" src={p.sprites.front_shiny} alt={p.name}/>
          </div>
          <div class="card-body" key={p.name}>
            <span class="card-title pokemon-name"><h5 >{p.id}. {p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h5></span>
            <span class="card-text">Type: {p.types[0].type.name.charAt(0).toUpperCase() + p.types[0].type.name.slice(1)}</span><br />
            <span class="card-text">Height: {p.height * 10} cm</span><br />
            <span class="card-text">Weight: {(p.weight * 0.1).toFixed(2)} kg</span><br />
            <span class="card-text">HP: {p.stats[0].base_stat}</span><br />
            <span class="card-text">Attack: {p.stats[1].base_stat}</span><br />
            <span class="card-text">Defense: {p.stats[2].base_stat}</span><br />
            <span class="card-text">Abilities: {p.abilities[0].ability.name.charAt(0).toUpperCase() + p.abilities[0].ability.name.slice(1)}
              {p.abilities[1]?.ability.name ? ', ' + p.abilities[1].ability.name.charAt(0).toUpperCase() + p.abilities[1].ability.name.slice(1) : ''}</span>
          </div>
        </div>
      </div>

      ))}
    </div>
  );

}
