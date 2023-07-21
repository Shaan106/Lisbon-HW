import './App.css';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  //base url for api req
  //const url = 'https://jsonplaceholder.typicode.com/';
  const url = 'https://pokeapi.co/api/v2/';

  //array for all api returns
  const [pokeInfo, setPokeInfo] = useState([]);
  const [pokeSpecies, setPokeSpecies] = useState("");

  // function to fetch api requests
  async function fetchPokemon() {
    
    //fetch Library
    const res = await fetch(url + 'pokemon/pikachu', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/text',
      },
    });
    const data = await res.json();

    // console.log(data);
    // console.log(data.species.name);

    setPokeInfo(data);
    setPokeSpecies(data.species);

    console.log(pokeInfo["species.name"])

  }

  return (
    <div className="text-center">

      <div>Can add a text field here to choose pokemon</div>

      <button className="btn btn-primary mt-3" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>

      <div>
        <div>{pokeInfo.id}</div>
      </div>

      
      <div>
        <div>{pokeSpecies.name}</div>
      </div>

    </div>
  );
}

export default App;