import axios from "axios";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

export function MobileLegend() {
  const [input, setInput] = useState("");
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.dazelpro.com/mobile-legends/hero")
      .then((respone) => {
        setHeroes(respone.data.hero);
      });
  }, []);

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
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      {heroes
        .filter((data) => {
          return input.toLowerCase() === ""
            ? data
            : data.hero_name.toLowerCase().includes(input);
        })
        .map((heroes) => {
          return <div key={heroes.hero_id}>{heroes.hero_name}</div>;
        })}
    </>
  );
}
