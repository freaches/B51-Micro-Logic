import axios from "axios";
import { useState } from "react";
import BackButton from "../components/BackButton";

export function MobileLegend() {
  const [input, setInput] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const fetchData = (value) => {
    axios
      .get("https://api.dazelpro.com/mobile-legends/hero")
      .then((respone) => {
        const dataHeroes = respone.data.hero;
        const result = dataHeroes.filter((hero) => {
          return (
            hero &&
            hero.hero_name &&
            hero.hero_name.toLowerCase().includes(value)
          );
        });
        setHeroes(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <BackButton />
      <div className="title">Mobile Legend Heroes</div>
      <div className="mb-5">
        <label htmlFor="heroes" className="label">
          Search Heroes
        </label>
        <div className="div-css">
          <input
            type="text"
            id="heroes"
            className="form-input"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      {heroes?.map((heroes) => {
        return <div key={heroes.hero_id}>{heroes.hero_name}</div>;
      })}
    </>
  );
}
