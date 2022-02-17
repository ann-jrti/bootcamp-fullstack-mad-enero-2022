import './style.css'

function CharacterCard({name, img, status, race, location, seen='none'}) {
 
    return(
        <article className="RM__character">
            <img className="RM__character-img" src={img}></img>
            <section className="RM__all-info">
                <h2 className="RM__character-name">{name}</h2>

                <div className="RM__character-status">
                    <div className="RM__character-light-status"></div>
                    <div className="RM__character-main-info-container">
                        <p className="RM__character-alive-status">{status}</p>
                        <p>-</p>
                        <p className="RM__character-race">{race}</p>
                    </div>
                   
                </div>

                <div className="RM__info-container RM__last-location-container">
                    <p className="RM__last-location">Last known location:</p>
                    <p className="RM__last-location-value">{location}</p>
                </div>

                <div className="RM__info-container RM__first-seen-container">
                    <p className="RM__first-seen">First seen in:</p>
                    <p className="RM__first-seen-value">{seen}</p>
                </div>
            </section>
           
        </article>
    )
}

export default CharacterCard;