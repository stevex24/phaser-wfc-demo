import WFCDemo from './scene_v2.js';

// Phaser game configuration
const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  backgroundColor: '#0b1020',
  pixelArt: true,
  scene: WFCDemo
};

// Launch the Phaser game
new Phaser.Game(config);

