import React from 'react';
import Recomment from './components/recomment/recomment.jsx' // Ensure this path is correct

const recommendations = [
  {
    imageSrc: 'src/assets/text.png', // Ensure this path is correct
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  // Add more recommendations as needed
];

export default function DetailRecommend() {
  return <Recomment recommendations={recommendations} />;
}
