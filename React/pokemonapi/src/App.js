import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

function App() {

    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
          return response.json()
        })
        .then(response => {
          setPokemon(response.results)
        })
        .catch((err) => {
          console.log(err);
        })
    }, []);
  return (
    <div className="App">
        <ul>
        {
            pokemon.map((pokemonObj, index)=>{
                return (<li key={index}>{pokemonObj.name}</li>)
            })
        }
        </ul>
    </div>
  );
}

export default App;
