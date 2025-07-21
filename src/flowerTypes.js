// src/flowerTypes.js

import roseImg from './assets/rose.png';
import tulipImg from './assets/tulip.png';
import daisyImg from './assets/daisy.png';

export const FLOWER_TYPES = {
  rose: {
    label: 'Rose',
    image: roseImg,
    width: 120,
    height: 200,
    tipXPercent: 0.3,   // 30% from left
    tipYPercent: 0.9,   // 90% from top (bottom of image)
    scale: 1.5,
  },
  tulip: {
    label: 'Tulip',
    image: tulipImg,
    width: 100,
    height: 180,
    tipXPercent: 0.5,   // e.g. 50% from left
    tipYPercent: 0.92,
    scale: 1.3,
  },
  daisy: {
    label: 'Daisy',
    image: daisyImg,
    width: 90,
    height: 140,
    tipXPercent: 0.4,
    tipYPercent: 0.95,
    scale: 1.2,
  },
};
