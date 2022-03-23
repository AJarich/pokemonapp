import React from 'react';

export default function PokemonList({gotoNextPage, gotoPrevPage}){
  return (
    <div class="button-group">
      {gotoPrevPage && <button class="btn btn-primary prev" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button class="btn btn-primary" onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
