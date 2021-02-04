import ObjectJeu from "./ObjectJeu";
import * as THREE from 'three';

export default class Door extends ObjectJeu {
  constructor(scene, importFile, isAnimations, opacityInit, distanceToRobot, callback){
    super(scene, importFile, isAnimations, opacityInit, distanceToRobot, callback)
    this.doorOpen = false;
  }

  createBoudingBox(){
    const material = new THREE.MeshPhysicalMaterial( { visible: false } )

    //side right
    const geometry1 = new THREE.BoxBufferGeometry( 6.5, 18, 3 )
    this.boundingBoxObject1 = new THREE.Mesh(geometry1, material)
    this.boundingBoxObject1.position.set(9.9, 10, -0.5)
    this.boundingBox1 = new THREE.Box3().setFromObject(this.boundingBoxObject1)

    //side left
    const geometry2 = new THREE.BoxBufferGeometry( 6.5, 18, 3 )
    this.boundingBoxObject2 = new THREE.Mesh(geometry2, material)
    this.boundingBoxObject2.position.set(-9.9, 10, -0.5)
    this.boundingBox2 = new THREE.Box3().setFromObject(this.boundingBoxObject2)

    //door right
    const geometry3 = new THREE.BoxBufferGeometry( 6.5, 18, 3 )
    this.boundingBoxObject3 = new THREE.Mesh(geometry3, material)
    this.boundingBoxObject3.position.set(3.2, 10, -0.5)
    this.boundingBox3 = new THREE.Box3().setFromObject(this.boundingBoxObject3)

    //door left
    const geometry4 = new THREE.BoxBufferGeometry( 6.5, 18, 3 )
    this.boundingBoxObject4 = new THREE.Mesh(geometry4, material)
    this.boundingBoxObject4.position.set(-3.2, 10, -0.5)
    this.boundingBox4 = new THREE.Box3().setFromObject(this.boundingBoxObject4)


    this.firstGltfChild.add(this.boundingBoxObject1);
    this.firstGltfChild.add(this.boundingBoxObject2);
    this.firstGltfChild.children[0].add(this.boundingBoxObject3);
    this.firstGltfChild.children[1].add(this.boundingBoxObject4);

    this.boundingBox.push(this.boundingBox1);
    this.boundingBox.push(this.boundingBox2);
    this.boundingBox.push(this.boundingBox3);
    this.boundingBox.push(this.boundingBox4);
  }

  animateBoundingBox(){
    if(this.boundingBox1 && this.boundingBox2 && this.boundingBox3 && this.boundingBox4){
        this.boundingBox1.setFromObject(this.boundingBoxObject1)
        this.boundingBox2.setFromObject(this.boundingBoxObject2)
        this.boundingBox3.setFromObject(this.boundingBoxObject3)
        this.boundingBox4.setFromObject(this.boundingBoxObject4)
    }
  }

  openDoors(){
    if(this.closeDoor1){
        this.closeDoor1.stop()
        this.closeDoor2.stop()
    }
    this.openDoor1Animation = THREE.AnimationClip.findByName(this.animationsList, 'open_door1')
    this.openDoor2Animation = THREE.AnimationClip.findByName(this.animationsList, 'open_door2')
    this.openDoor1 = this.mixer.clipAction(this.openDoor1Animation)
    this.openDoor2 = this.mixer.clipAction(this.openDoor2Animation)
    this.openDoor1.setLoop(THREE.LoopOnce)
    this.openDoor2.setLoop(THREE.LoopOnce)
    this.openDoor1.clampWhenFinished = true
    this.openDoor2.clampWhenFinished = true
    this.openDoor1.play()
    this.openDoor2.play()
    this.doorOpen = true
  }

  closeDoors(){
    if(this.openDoor1){
        setTimeout(() => {
            this.openDoor1.stop()
            this.openDoor2.stop()
        }, 20)
    }
    this.closeDoor1Animation = THREE.AnimationClip.findByName(this.animationsList, 'close_door1')
    this.closeDoor2Animation = THREE.AnimationClip.findByName(this.animationsList, 'close_door2')
    this.closeDoor1 = this.mixer.clipAction(this.closeDoor1Animation)
    this.closeDoor2 = this.mixer.clipAction(this.closeDoor2Animation)
    this.closeDoor1.setLoop(THREE.LoopOnce)
    this.closeDoor2.setLoop(THREE.LoopOnce)
    this.closeDoor1.clampWhenFinished = true
    this.closeDoor2.clampWhenFinished = true
    this.closeDoor1.play()
    this.closeDoor2.play()
    this.doorOpen = false
  }
}