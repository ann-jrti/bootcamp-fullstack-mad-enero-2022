import './style.css'
import CharacterCard from '../character-card'
import React, {useState, useEffect} from 'react'


const characterListData = 'https://rickandmortyapi.com/api/character'
const locationListData = 'https://rickandmortyapi.com/api/location'
const episodeListData = 'https://rickandmortyapi.com/api/episode'


function CharacterList() {
    let [characters, updateCharacters] = useState([])
    useEffect(() => {
        fetch(characterListData)
        .then(r => r.json())
        .then(data => updateCharacters(data.results))
    }, [])
    console.log(characters);

    const printCharacters = characters.map(c => {
        return <CharacterCard
        key={c.id} name={c.name} img={c.image} status={c.status} race={c.species} location={c.location.name} seen={c.episode[c.episode.length-1]}>

        </CharacterCard>
    })

    return(
        // <CharacterCard></CharacterCard>
        <React.Fragment>
        {printCharacters}
        </React.Fragment>
    )
}

export default CharacterList;