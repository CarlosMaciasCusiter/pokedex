import React, {useState, useEffect} from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon'
import Card from './components/Card.jsx'

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(()=> {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  // const next = async () => {
  //   setLoading(true);
  //   let data = await getAllPokemon(nextUrl);
  //   await loadPokemon(data.results);
  //   setNextUrl(data.next);
  //   setPrevUrl(data.previous);
  //   setLoading(false);
  // }

  // const prev = async() => {
  //   if (!prevUrl) return
  //   setLoading(true);
  //   let data = await getAllPokemon(prevUrl);
  //   await loadPokemon(data.results);
  //   setNextUrl(data.next);
  //   setPrevUrl(data.previous)
  //   setLoading(false);
  // }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  console.log(pokemonData)
  return (
    <div>
      { loading ? <h1>Loading...</h1> : (
        <div className="grid-contaiiner">
          {pokemonData.map((pokemon, index) => <Card key={index} pokemon={pokemon}/>)}
        </div>
      )}
    </div>
  );
}

export default App;
