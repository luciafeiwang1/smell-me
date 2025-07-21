import React from "react";
import Bouquet from './components/Bouquet';
import './App.css';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1> 💐 Flowers for Cameron 💐</h1>
      <Bouquet />
    </div>
  );
}