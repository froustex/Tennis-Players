import "../styles/PlayersDetails.css";
import { Link } from "react-router-dom";

const PlayerCard = ({ joueurs, search, name }) => {
  return (
    <>
      {joueurs
        .filter((joueur) => joueur.nationality.toLowerCase().includes(search))
        .filter((joueur) => joueur.name.toLowerCase().includes(name))
        .map((joueur, index) => (
          <section key={index} className="player">
            <div className="img-container">
              <Link to={`/players/${joueur.id}`}>
                <img
                  className="imgPlayer"
                  title={joueur.name}
                  src={joueur.image}
                  alt={joueur.name}
                />
              </Link>
            </div>
          </section>
        ))}
    </>
  );
};

export default PlayerCard;
