import './style.css'
import CharacterCard from '../character-card'

const characterListData = 'https://rickandmortyapi.com/api/character'
const locationListData = 'https://rickandmortyapi.com/api/location'
const episodeListData = 'https://rickandmortyapi.com/api/episode'

function CharacterList() {
 
    return(
        <CharacterCard></CharacterCard>
    )
}

export default CharacterList;