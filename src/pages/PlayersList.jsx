import "../styles/PlayersList.css";
import PlayerCard from "../components/PlayerCard";
import { useState } from "react";

const Players = ({ joueurs }) => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="searchZone">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Recherche par pays"
        />
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Recherche par nom"
        />
      </div>
      <div className="containerCardPlayer">
        <PlayerCard joueurs={joueurs} search={search} name={name} />
      </div>
    </>
  );
};

export default Players;
