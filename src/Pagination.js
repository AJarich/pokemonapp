import React from 'react';

export default function PokemonList({gotoNextPage, gotoPrevPage}){
  return (
    <div>
      {gotoPrevPage && <button class="btn btn-primary mx-2" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button class="btn btn-primary mx-2" onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
