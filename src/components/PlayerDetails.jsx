import { useParams, useNavigate } from "react-router-dom";
import "../styles/PlayersDetails.css";

const PlayerDetails = ({ joueurs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      {joueurs
        .filter((joueur) => joueur.id == id)
        .map((joueur, index) => (
          <div className="playerDetails-container" key={index}>
            <button className="headerButton" onClick={() => navigate(-1)}>
              Revenir aux joueurs
            </button>
            <section className="player">
              <div className="img-container">
                <img
                  className="imgPlayer"
                  src={joueur.image}
                  title={joueur.name}
                  alt={joueur.name}
                />
              </div>
            </section>
            <div className="playerDesc">{joueur.desc}</div>
          </div>
        ))}
    </>
  );
};

export default PlayerDetails;
