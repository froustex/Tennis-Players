import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [changeButtonText, setChangeButtonText] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setChangeButtonText(!changeButtonText);
    navigate("/players");
  };
  const backHomeClick = () => {
    setChangeButtonText(!changeButtonText);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="src\assets\earth_14708621.png"
          alt="logo de tennis"
        />
        <p className="siteTitle">Ace Of Tennis</p>
        {changeButtonText ? (
          <button className="headerButton" onClick={handleClick}>
            Découvrez tous nos joueurs
          </button>
        ) : (
          <button className="headerButton" onClick={backHomeClick}>
            Revenir à la page d'accueil
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
