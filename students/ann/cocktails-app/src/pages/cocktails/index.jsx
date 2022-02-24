import './style.css'
import Card from '../../components/card';
import getCocktails from '../../data/cocktails';
import React, { useState, useEffect } from 'react';

function Cocktails() {

   
    const [cocktails, setCocktails] = useState([])
    useEffect(() => {
        getCocktails('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(d => setCocktails(d))
    }, [])
    console.log(cocktails);

    const allCocktails = cocktails.map(cocktail => {
        return <Card key={cocktail.strDrink} name={cocktail.strDrink} img={cocktail.strDrinkThumb}></Card>
    })
    console.log(allCocktails);

    return (
        <main>
             {cocktails.length === 0 ? <h2>Cargando...</h2> : allCocktails}
        </main>
       
    )
}

export default Cocktails;