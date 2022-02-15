import './style.css'
import React, {useState, useEffect} from 'react';

function CountriesList() {
    let [countries, updateCountries] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
        .then(r => r.json())
        .then(c => updateCountries(c.countries));
    }, []);

    return(
        <React.Fragment>
            <h1>Search for a country</h1>
            <ul>
                {countries.map(c => <li>{c.name_en}, {c.dial_code}</li>)}
            </ul>
        </React.Fragment>
    )
}

export default CountriesList;