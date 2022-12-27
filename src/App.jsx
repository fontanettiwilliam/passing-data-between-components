import { useState } from "react";

import { Pokemon } from "./components/Pokemon";

import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <h1>Choose your Pokemon</h1>

      <div>
        <Pokemon name="Charmander" setPokemon={setPokemon} />
        <Pokemon name="Bulbassauro" setPokemon={setPokemon} />
        <Pokemon name="Squirtle" setPokemon={setPokemon} />
        <Pokemon name="Pikachu" setPokemon={setPokemon} />
        <Pokemon name="I don't know!" setPokemon={setPokemon} />
      </div>

      <div className="card">
        {pokemon !== "" ? (
          <h2>You chose {pokemon}</h2>
        ) : (
          <p>Click in one to choose</p>
        )}
      </div>
    </div>
  );
}

export default App;
