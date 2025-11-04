const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  backgroundColor: '#0b1020',
  pixelArt: true,
  scene: { preload, create }
};

new Phaser.Game(config);

function preload() {
  // two generated textures
  this.textures.generate('water', { data:['2'], pixelWidth:32, palette:{2:'#2e8bff'} });
  this.textures.generate('land',  { data:['1'], pixelWidth:32, palette:{1:'#55aa33'} });
}

function create() {
  console.log('create() reached');
  const tileSize = 32;
  const w = 20, h = 15;

  // draw random grid of land/water
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const key = Math.random() > 0.5 ? 'land' : 'water';
      this.add.image(
        x * tileSize + tileSize / 2,
        y * tileSize + tileSize / 2,
        key
      );
    }
  }

  this.add.text(10, 460, 'If you see blue & green squares, Phaser works!', 
    { fontSize:'16px', fill:'#fff' });
}

