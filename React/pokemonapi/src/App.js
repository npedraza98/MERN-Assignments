import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
function App() {

    const [pokemonData,setPokemonData] = useState([])

    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
          setPokemonData(response.data.results);
        })
    }, []);
  return (
    <div className="App">
        <ul>
        {
            pokemonData.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })
        }
        </ul>
    </div>
  );
}

export default App;
