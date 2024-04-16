import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/Landing.css";
import Landing from "./pages/Landing";
import Layout from "./components/Layout";
import PlayersList from "./pages/PlayersList";
import PlayerDetails from "./components/PlayerDetails";

const joueurs = [
  {
    id: 1,
    name: "FEDERER Roger",
    age: 43,
    image: "src/assets/federer.jpg",
    nationality: "Suisse",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 2,
    name: "NADAL Rafaël",
    age: 38,
    image: "src/assets/nadal.jpg",
    nationality: "Espagne",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 3,
    name: "DJOKOVIC Novak",
    age: 37,
    image: "src/assets/djokovic.jpg",
    nationality: "Serbie",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 4,
    name: "ALCARAZ Carlos",
    age: 21,
    image: "src/assets/alcaraz.jpg",
    nationality: "Espagne",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 5,
    name: "MEDVEDEV Daniil",
    age: 28,
    image: "src/assets/medvedev.jpg",
    nationality: "Russie",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 6,
    name: "ZVEREV Alexander",
    age: 27,
    image: "src/assets/zverez.jpg",
    nationality: "Allemagne",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 7,
    name: "TSITSIPAS Stefanos",
    age: 26,
    image: "src/assets/tsitsipas.jpg",
    nationality: "Grece",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 8,
    name: "HERBERT Pierre-Hugues",
    age: 33,
    image: "src/assets/herbert.jpg",
    nationality: "France",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 9,
    name: "SINNER Jannik",
    age: 23,
    image: "src/assets/sinner.jpg",
    nationality: "Italie",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 10,
    name: "RUDD Casper",
    age: 25,
    image: "src/assets/rudd.jpg",
    nationality: "Norvège",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 11,
    name: "RUNE Holger",
    age: 20,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
    image: "src/assets/rune.jpg",
    nationality: "Danemark",
    // eslint-disable-next-line no-dupe-keys
    desc: "Laorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 12,
    name: "DIMITROV Grigor",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
    age: 32,
    image: "src/assets/dimitrov.jpg",
    nationality: "Bulgarie",
    // eslint-disable-next-line no-dupe-keys
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 13,
    name: "DE MINAUR Alex",
    age: 25,
    image: "src/assets/De Minaur.jpg",
    nationality: "Australie",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 14,
    name: "HUMBERT Ugo",
    age: 25,
    image: "src/assets/Humbert.jpg",
    nationality: "France",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 15,
    name: "HURKACZ Hubert",
    age: 27,
    image: "src/assets/Hurkacz.jpg",
    nationality: "Pologne",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 16,
    name: "RUBLEV Andrey",
    age: 26,
    image: "src/assets/Rublev.jpg",
    nationality: "Russie",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 17,
    name: "MANNARINO Adrian",
    age: 35,
    image: "src/assets/Mannarino.jpg",
    nationality: "France",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 18,
    name: "KACHANOV Karen",
    age: 27,
    image: "src/assets/Khachanov.jpg",
    nationality: "Russie",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 19,
    name: "SHELTON Ben",
    age: 21,
    image: "src/assets/Shelton.jpg",
    nationality: "Etats-Unis",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 20,
    name: "FRITZ Taylor",
    age: 26,
    image: "src/assets/Fritz.jpg",
    nationality: "Etats-Unis",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
  {
    id: 21,
    name: "PAUL Tommy",
    age: 26,
    image: "src/assets/Paul.jpg",
    nationality: "Etats-Unis",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde magni sed fugiat veniam. Dolorem id eveniet iure omnis hic asperiores laboriosam impedit, illum modi voluptas, molestiae neque dolorum fugit neque dolorum fugit?",
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route
              path="/players"
              element={<PlayersList joueurs={joueurs} />}
            />
            <Route
              path="/players/:id"
              element={<PlayerDetails joueurs={joueurs} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
