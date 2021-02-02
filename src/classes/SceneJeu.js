import Scene from "./Scene";
import * as THREE from 'three';

export default class SceneJeu extends Scene {
  constructor(htmlElmt, camPos, widthFactor, heightFactor, isOrbitControls) {
    super(htmlElmt, camPos, widthFactor, heightFactor, isOrbitControls);
  }

  init3DScene () {
      this.createScene();
      this.createCamera();
      this.createRenderer();
      this.createLights();
      this.createPointsGround();
      this.onResize();

      this.animate();
  }

  createPointsGround(){
      let x = 0;
      let z = 0;
      this.numberOfPoint = 40;
      this.numberOfLine = 25;

      const groupLine = new THREE.Group();
      this.groupGround = new THREE.Group();
      this.scene.add(groupLine);
      this.scene.add(this.groupGround);

      while (x < this.numberOfPoint){
          const geometry = new THREE.SphereBufferGeometry( 0.1, 4, 4 );
          const material = new THREE.MeshLambertMaterial({ color: 0x3b6f9c });
          const cube = new THREE.Mesh(geometry, material);
          cube.position.x = x*10;
          groupLine.attach(cube);
          x++;
      }
      groupLine.position.x = -(this.numberOfPoint * 10 / 2);

      while (z < this.numberOfLine){
          const newModel = groupLine.clone();
          newModel.position.z = z*10;
          this.groupGround.attach(newModel);
          z++;
      }
      this.groupGround.position.z = -(this.numberOfLine * 10 / 2);
  }
}