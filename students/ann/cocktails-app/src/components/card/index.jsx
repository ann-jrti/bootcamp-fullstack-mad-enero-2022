import './style.css'

function Card({img, name}) {

    return(
        <article>
            <img src={img}></img>
            <h2>{name}</h2>
        </article>
    )
}

export default Card;