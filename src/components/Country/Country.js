import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, area, capital, region, flags} = props.country;
    return (
        <div className='single-country'>
            <h2>Country Name: {name.common} </h2>
            <h3>Capital: {capital} </h3>
            <img src={flags.png} alt="flags-image" />
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;