import './style.css'

function CharacterCard() {
 
    return(
        <article className="RM__character">
            <img className="RM__character-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"></img>
            <section clasName="RM__all-info">
                <h2 className="RM__character-name">Doofus Rick</h2>

                <div className="RM__character-status">
                    <div className="RM__character-light-status"></div>
                    <p className="RM__character-race">Unknown - Human</p>
                </div>

                <div className="RM__info-container RM__last-location-container">
                    <p className="RM__last-location">Last known location</p>
                    <p className="RM__last-location-value">Earth</p>
                </div>

                <div className="RM__info-container RM__first-seen-container">
                    <p className="RM__first-seen">First seen in</p>
                    <p className="RM__first-seen-value">Close Rick-counters of the Rick Kind</p>
                </div>
            </section>
           
        </article>
    )
}

export default CharacterCard;