import './style.css'

function PokeHeader() {


    return (
        <nav className="pokemon__header">
            <h1 className="pokemon__pokedex-title">Pokédex</h1>
            <input type="text" placeholder="search"></input>
        </nav>
    )
}

export default PokeHeader;