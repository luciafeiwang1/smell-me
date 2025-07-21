import React, { useState } from 'react';
import Flower from './Flower';
import roseImg from '../assets/rose.png';
import daisyImg from '../assets/daisy.png';
import tulipImg from '../assets/tulip.png';
import blueImg from '../assets/blue.png';
import vaseImg from '../assets/vase.png';
import tableImg from '../assets/table.png';

export default function Bouquet() {

  const SCALE = 1.5;
  const [flowers, setFlowers] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  /** ROSE */
  function addRose() {
    const FLOWER_WIDTH = 100 * SCALE;
    const X_OFFSET = 0.27 * FLOWER_WIDTH;
    const VASE_X = 200 * SCALE;
    const FLOWER_X = VASE_X - X_OFFSET;
    const FLOWER_Y = 100 * SCALE;
    const angle = -50 + Math.random() * 70;
    setFlowers([
      ...flowers,
      {
        id: Date.now(),
        image: roseImg,
        x: FLOWER_X,
        y: FLOWER_Y,
        rotate: angle,
        message: "ily",
        width: 100 * SCALE,
        height: 150 * SCALE,
        transformOrigin: '27% 105%',
      }
    ]);
  }

  /** DAISY */
  function addDaisy() {
    const FLOWER_WIDTH = 110 * SCALE;
    const X_OFFSET = 0.5 * FLOWER_WIDTH;
    const VASE_X = 200 * SCALE;
    const FLOWER_X = VASE_X - X_OFFSET;
    const FLOWER_Y = 120 * SCALE;
    const angle = -40 + Math.random() * 80;
    setFlowers([
      ...flowers,
      {
        id: Date.now(),
        image: daisyImg,
        x: FLOWER_X,
        y: FLOWER_Y,
        rotate: angle,
        message: "ily",
        width: 110 * SCALE,
        height: 110 * SCALE,
        transformOrigin: '50% 120%',
      }
    ]);
  }

  /** TULIP */
  function addTulip() {
    const FLOWER_WIDTH = 70 * SCALE;
    const X_OFFSET = 0.5 * FLOWER_WIDTH;
    const VASE_X = 200 * SCALE;
    const FLOWER_X = VASE_X - X_OFFSET;
    const FLOWER_Y = 70 * SCALE;
    const angle = -42 + Math.random() * 85;
    setFlowers([
      ...flowers,
      {
        id: Date.now(),
        image: tulipImg,
        x: FLOWER_X,
        y: FLOWER_Y,
        rotate: angle,
        message: "ily",
        width: 52 * SCALE,
        height: 160 * SCALE,
        transformOrigin: '60% 110%',
      }
    ]);
  }

  /** BLUE FLOWER */
  function addBlueFlower() {
    const FLOWER_WIDTH = 50 * SCALE;
    const X_OFFSET = 0.5 * FLOWER_WIDTH;
    const VASE_X = 200 * SCALE;
    const FLOWER_X = VASE_X - X_OFFSET;
    const FLOWER_Y = 140 * SCALE;
    const angle = -37 + Math.random() * 80;
    setFlowers([
      ...flowers,
      {
        id: Date.now(),
        image: blueImg,
        x: FLOWER_X,
        y: FLOWER_Y,
        rotate: angle,
        message: "ily",
        width: 50 * SCALE,
        height: 100 * SCALE,
        transformOrigin: '55% 115%',
      }
    ]);
  }

  return (
    <div
      style={{
        position: 'relative',
        width: 400 * SCALE,
        height: 400 * SCALE,
        margin: '0 auto',
        borderRadius: 20,
        boxShadow: '0 4px 16px #0001',
        overflow: 'visible',
        name: 'box'
      }}
    >
      {/* Flowers */}
      {flowers.map(flower => (
        <Flower
          key={flower.id}
          image={flower.image}
          x={flower.x}
          y={flower.y}
          width={flower.width}
          height={flower.height}
          message={flower.message}
          rotate={flower.rotate}
          transformOrigin={flower.transformOrigin}
          isHovered={hoveredId === flower.id}
          onMouseEnter={() => setHoveredId(flower.id)}
          onMouseLeave={() => setHoveredId(null)}
        />
      ))}
      {/* Vase */}
      <img
        src={vaseImg}
        alt="Vase"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          width: 200 * SCALE,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* Buttons */}
      <button
        onClick={addRose}
        style={{ position: 'absolute', top: 10, left: 40, zIndex: 3 }}
      >
        Add Rose ❤️
      </button>
      <button
        onClick={addDaisy}
        style={{ position: 'absolute', top: 10, left: 160, zIndex: 3 }}
      >
        Add Daisy 🤍
      </button>
      <button
        onClick={addTulip}
        style={{ position: 'absolute', top: 10, left: 280, zIndex: 3 }}
      >
        Add Tulip 🩷
      </button>
      <button
        onClick={addBlueFlower}
        style={{ position: 'absolute', top: 10, left: 400, zIndex: 3 }}
      >
        Add Blue Flower 💙
      </button>
    </div>
  );
}
