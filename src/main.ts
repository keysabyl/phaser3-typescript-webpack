import 'phaser';


const config:Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'content',
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: 1, 
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },

    backgroundColor: "#000000",
    scene: [
      
    ]
};
//sclae:mode - https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scalemanager/

let game:Phaser.Game = new Phaser.Game(config);
