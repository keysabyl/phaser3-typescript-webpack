import 'phaser';
import firebase = require("firebase/app");
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Menu from './scenes/Menu';
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  dom: { 
    createContainer: true
  },
  width: window.innerWidth,
  height: window.innerHeight,

  resolution: 1,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },

  backgroundColor: "#000000",
  scene: [Menu]
};
//sclae:mode - https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scalemanager/

let game: Phaser.Game = new Phaser.Game(config);
