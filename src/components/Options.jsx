// src/components/Options.jsx
import React, { useState } from "react";
import PrizeGrid from "./PrizeGrid";
import { ChallengeGrid } from "./ChallengeGrid";
import ExampleArtGrid from "./ExampleArtGrid";
import Gallery from "./Gallery";

export default function Options() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="options">
      <h2>Explore</h2>
      <div className="buttons">
        <button onClick={() => setSelected("prizes")}>Prizes</button>
        <button onClick={() => setSelected("challenges")}>Challenges</button>
        <button onClick={() => setSelected("examples")}>Example Art</button>
        <button onClick={() => setSelected("gallery")}>Gallery</button>
      </div>
      <div className="grid-display">
        {selected === "prizes" && <PrizeGrid />}
        {selected === "challenges" && <ChallengeGrid />}
        {selected === "examples" && <ExampleArtGrid />}
        {selected === "gallery" && <Gallery />}
      </div>
    </section>
  );
}