import './style.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import cocktail1 from '../../assets/imgs/cocktails-1.jpeg'

function Home() {
    return (
        <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cocktail1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn to prepare your favourite cocktail</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cocktail1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ordinary drinks and alcoholic drinks</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </React.Fragment>

    );
}

export default Home;