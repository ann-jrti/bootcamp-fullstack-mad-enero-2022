import './style.css'
import React, {useState, useEffect} from 'react';

function CountriesList() {
    let [countries, updateCountries] = useState([]);
    
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
        .then(r => r.json())
        .then(c => updateCountries(c.countries));
    }, []);

    let allCountries = countries.map(c => <li key={c.name_es}>{c.name_es}, {c.dial_code}</li>)
    let [filteredArray, updateFilteredArray] = useState(allCountries);
    
    const onHandleChange = e => {
        const filter = countries.filter( c => {
            return c.name_es.toLowerCase().includes(e.target.value.toLowerCase());
        })
        
        let countriesFiltered = filter.map(c => <li key={c.name_es}>{c.name_es}, {c.dial_code}</li>);
        updateFilteredArray(countriesFiltered);
    }
    
    return(
        <React.Fragment>
            <h1>Search for a country</h1>
            <input onChange={onHandleChange} type="text" />
            <ul>
                {filteredArray}
            </ul>
        </React.Fragment>
    )
}

export default CountriesList;