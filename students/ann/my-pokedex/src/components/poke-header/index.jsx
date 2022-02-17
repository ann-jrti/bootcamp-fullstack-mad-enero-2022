import './style.css'

function PokeHeader({handleOnChange}) {

    return (
        <nav className="pokemon__header">
            <h1 className="pokemon__pokedex-title">Pokédex</h1>
            <input onChange={handleOnChange} type="text" placeholder="search"></input>
        </nav>
    )
}

export default PokeHeader;