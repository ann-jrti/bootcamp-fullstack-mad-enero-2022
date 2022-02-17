import React, { useState, useEffect } from "react";
import PokeCard from "../poke-card";

function PokeList() {
  let [pokemons, updatePokemons] = useState([]);

  //   useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon/6/")
  //       .then((r) => r.json())
  //       .then((d) => updatePokemons(d));
  //   }, []);

  
  
  useEffect(() => {
    const getPokemon = async (api) => {
      const response = await fetch(api);
      const data = await response.json();
      updatePokemons(data.results);
    };
    getPokemon("https://pokeapi.co/api/v2/pokemon");
  }, []);
  console.log(pokemons);

  
  const pokemonsUrl = pokemons.map( p => p.url)

  let [pokemonsObj, updatePokemonObj] = useState([])

  useEffect(() => {
      console.log('aquii', pokemonsUrl);
    pokemonsUrl.forEach((p) => {
      const getPokemonInfo = async () => {
        const response = await fetch(p);
        const data = await response.json();
        updatePokemonObj((pokemonsObj)=> [...pokemonsObj, data])
        console.log(data);
      };
      getPokemonInfo();
    });

  }, [pokemonsUrl]);
  console.log(pokemonsObj);

  const printPokemonCard = pokemonsObj.map(pokemon => {
      return <PokeCard
        img={pokemon.sprites.front_default}
        name={pokemon.name}
        types={pokemon.types[0].type.name}
        id={pokemon.id}
      ></PokeCard>
  })


  return (
    <React.Fragment>
      {pokemonsObj.length === 0 ? <h2>Cargando...</h2> : printPokemonCard}
    </React.Fragment>
  );
}

export default PokeList;
