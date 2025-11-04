export default class WFCDemo extends Phaser.Scene {
  constructor() { super('WFCDemo'); }

  preload() {
    this.textures.generate('water', { data:['2'], pixelWidth:32, palette:{2:'#2e8bff'} });
    this.textures.generate('land',  { data:['1'], pixelWidth:32, palette:{1:'#55aa33'} });
  }

  create() {
    console.log('Scene create() running');
    const wfc = new WaveFunctionCollapse(20, 15);
    const grid = wfc.generate();
    const size = 32;

    for (let y = 0; y < 15; y++) {
      for (let x = 0; x < 20; x++) {
        this.add.image(x * size + size/2, y * size + size/2, grid[y][x]);
      }
    }

    this.add.text(10, 460, 'Press R to regenerate', { fontSize:'16px', fill:'#fff' });
  }
}
window.WFCDemo = WFCDemo;


