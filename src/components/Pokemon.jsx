import char from "../assets/char.png";
import bulba from "../assets/bulba.png";
import squirt from "../assets/squirt.png";
import pikachu from "../assets/pikachu.png";
import dito from "../assets/dito.png";

export function Pokemon({ name, setPokemon }) {
  const handleImg = () => {
    switch (name) {
      case "Charmander":
        return char;
      case "Bulbassauro":
        return bulba;
      case "Squirtle":
        return squirt;
      case "Pikachu":
        return pikachu;
      default:
        return dito;
    }
  };

  return (
    <button onClick={() => setPokemon(name)} className={name.toLowerCase()}>
      <img
        src={handleImg()}
        className={`pokemon ${name.toLowerCase()}`}
        alt={name}
      />
    </button>
  );
}
