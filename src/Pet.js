import React from "react";
export default function Pet({ name, type }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
    </div>
  );
}
