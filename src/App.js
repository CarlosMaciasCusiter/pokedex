import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [pokedex, setPokedex] = useState([]);

  const addPokemon = () => {
    setPokedex([
      ...pokedex,
      {
        id: GameId,
        pokeName: pokemonName
      }
    ])
  }

  return (
    <div className="App">
      <h1>Testing Git</h1>
    </div>
  );
}

export default App;
