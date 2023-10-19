import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pokemons, Pokemon } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/pokemons/:name" element={<Pokemon />} />
    </Routes>
  );
};
