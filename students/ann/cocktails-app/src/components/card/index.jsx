import './style.css'
import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card'

function CocktailCard({ img, name }) {

    return (
        <React.Fragment>
            <Card className="m-2" style={{ width: '12rem', height: '19rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h2 className='fs-6'>{name}</h2>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Button className="sm" variant="dark">See details</Button>
                </Card.Body>
            </Card>

        </React.Fragment>


    )
}

export default CocktailCard;

// <article>
// <img src={img}></img>
// <h2>{name}</h2>
// </article>