import "./App.css";
import React from 'react'
import { HeaderWebPage } from "./HeaderWebPage";
import { Hero } from "./Hero";

export function App() {
  return (
    <React.StrictMode>
      <HeaderWebPage />
      <Hero />
    </React.StrictMode>
  );
}
