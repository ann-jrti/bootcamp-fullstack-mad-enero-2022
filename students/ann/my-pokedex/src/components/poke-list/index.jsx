import React, { useState, useEffect } from "react";
import PokeCard from "../poke-card";

function PokeList() {
  let [pokemons, updatePokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(d => 
        {d.results.map((o) => {
          fetch(o.url)
          .then(res => res.json())
          .then(p => {
              pokemons.push(p);
              updatePokemons([...pokemons]);
            })
        })
      })
  }, []);

  console.log(pokemons);

    const printPokemonCard = pokemons.map(pokemon => {
        return <PokeCard
          img={pokemon.sprites.front_default}
          name={pokemon.name}
          types={pokemon.types[0].type.name}
          id={pokemon.id}
        ></PokeCard>
    })

  return (
    <React.Fragment>
      {pokemons.length === 0 ? <h2>Cargando...</h2> : printPokemonCard}
    </React.Fragment>
  );
}

export default PokeList;
