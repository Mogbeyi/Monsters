import React from "react";

export const Card = ({ monster }) => {
  return (
    <div>
      <h1 key={monster.id}>{monster.name}</h1>
    </div>
  );
};
