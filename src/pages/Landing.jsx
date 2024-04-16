import "../styles/Landing.css";

const Landing = () => {
  return (
    <>
    <div className="presentation">
    <section >
        Ce site est un mini projet effectué dans le cadre 
        d'une formation de développeur web et web mobile à la Wild Code School.
        Il est réalisé en React JS et ne contient pas de base de données.
        Le temps imparti pour la réalisation est de deux jours.
        Le choix de la thématique est libre.
        J'ai choisi de présenter des joueurs de tennis professionnels masculins.
    </section>
    <section>
        La deadline étant courte, le but est de présenter un livrable minimaliste mais fonctionnel.
        Le but étant plus le travail de certaines notions clés de React JS (props, state notamment) 
        que la réalisation d'un site complet nécessitant plus de temps.
        En conséquence, le site aura l'architecture suivante : 
        - Une page de présentation (celle que vous êtes en train de lire)
        - Une page avec les fiches des joueurs
        - Une page avec la fiche individuel du joueur plus détaillé
        Des liens de navigation nous permettront de naviguer entre ces pages.
        Une barre de recherche avec différentes possibilités de filtrage sera présente sur la page avec les fiches des joueurs
    </section>
    </div>
    </>
  )
};

export default Landing;
