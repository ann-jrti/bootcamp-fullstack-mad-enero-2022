import './style.css'
import getCocktails from '../../data/cocktails';
import React, { useState, useEffect } from 'react';
import CocktailCard from '../../components/card/index'
import Container from 'react-bootstrap/esm/Container';

function Cocktails() {


    const [cocktails, setCocktails] = useState([])
    useEffect(() => {
        getCocktails('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then(d => setCocktails(d))
    }, [])
    console.log(cocktails);

    const allCocktails = cocktails.map(cocktail => {
        return <CocktailCard key={cocktail.strDrink} name={cocktail.strDrink} img={cocktail.strDrinkThumb}></CocktailCard>
    })
    console.log(allCocktails);

    return (
        <Container className="d-flex flex-wrap g mt-4">
            {cocktails.length === 0 ? <h2>Cargando...</h2> : allCocktails}
        </Container>
    )
}

export default Cocktails;