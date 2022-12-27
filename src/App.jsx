import { useState } from "react";
import char from "./assets/char.png";
import bulba from "./assets/bulba.png";
import squirt from "./assets/squirt.png";
import pikachu from "./assets/pikachu.png";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <h1>Choose your Pokemon</h1>

      <div>
        <button onClick={() => setPokemon("Charmander")} className="charmander">
          <img src={char} className="pokemon charmander" alt="Charmander" />
        </button>
        <button
          onClick={() => setPokemon("Bulbassauro")}
          className="bulbassauro"
        >
          <img src={bulba} className="pokemon bulbassauro" alt="Bulbassauro" />
        </button>
        <button onClick={() => setPokemon("Squirtle")} className="squirtle">
          <img src={squirt} className="pokemon squirtle" alt="Squirtle" />
        </button>
        <button onClick={() => setPokemon("Pikachu")} className="pikachu">
          <img src={pikachu} className="pokemon pikachu" alt="Pikachu" />
        </button>
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
