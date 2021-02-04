import Gltf from "./Gltf";
import TWEEN from '@tweenjs/tween.js';

export default class ObjectJeu extends Gltf {
  constructor(scene, importFile, isAnimations, opacityInit, callback, distanceToRobot){
    super(scene, importFile, isAnimations, opacityInit, callback)
    this.distanceToRobot = distanceToRobot;
  }

  changeColorGltf(color){
    this.gltf.traverse((node) => {
        if (node.isMesh) {
            node.material.color.setHex(color)
        }
    })
  }

  revertColor(){
    this.gltf.traverse((node) => {
        if (node.isMesh) {
            node.material.emissive.setHex(0x000000)
        }
    })
  }

  fadeInElmt (delay) {
      this.gltf.traverse((node) => {
          if (node.isMesh) {
              new TWEEN.Tween(node.material).to({ opacity: 1 }, delay).easing(TWEEN.Easing.Quadratic.Out).start()
          }
      })
  }

  fadeOutElmt (delay) {
      this.gltf.traverse((node) => {
          if (node.isMesh) {
              new TWEEN.Tween(node.material).to({ opacity: 0 }, delay).easing(TWEEN.Easing.Quadratic.Out).start()
          }
      })
  }
}