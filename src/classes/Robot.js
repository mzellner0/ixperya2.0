import Gltf from "./Gltf";
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default class Robot extends Gltf {
  constructor(scene, importFile, isAnimations, callback){
    super(scene, importFile, isAnimations, callback)

    this.animationsActions = []
    this.activeAnimation
    this.changeAnimation = false
    this.onCatching = false
  }

  importGltf(){
    this.loader = new GLTFLoader()

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath('src/hdri/');
    const textureCube = cubeTextureLoader.load([
        'px.png', 'nx.png',
        'py.png', 'ny.png',
        'pz.png', 'nz.png'
    ]);
    
    this.loader.load(this.importFile, (object) => {
        object.scene.traverse((node) => {
            if (node.isMesh) {
                node.frustumCulled = false
                node.material.envMap = textureCube
                node.material.envMapIntensity = 1
                if(node.material.name !== 'contour_eyes'){
                    node.material.metalness = 0.05
                }
            }
        })
        
        this.gltf = object.scene
        this.moveGltfNull = object.scene.children[0]

        const geometry = new THREE.BoxBufferGeometry( 5, 9, 6 )
        const material = new THREE.MeshBasicMaterial( { transparent : true, opacity: 0, depthWrite: false, depthTest: false } )
        this.boundingBoxObject = new THREE.Mesh(geometry, material)
        this.boundingBoxObject.position.set(0, 8, 0)
        this.boundingBox = new THREE.Box3().setFromObject(this.boundingBoxObject)

        this.moveGltfNull.add(this.boundingBoxObject)
        
        this.idleAnimation = THREE.AnimationClip.findByName(object.animations, 'idle')
        this.moveAnimation = THREE.AnimationClip.findByName(object.animations, 'move')
        this.catchAnimation = THREE.AnimationClip.findByName(object.animations, 'catch')

        this.mixer = new THREE.AnimationMixer(object.scene)

        this.idle = this.mixer.clipAction(this.idleAnimation)
        this.move = this.mixer.clipAction(this.moveAnimation)
        this.catch = this.mixer.clipAction(this.catchAnimation)
        
        this.idle.play()
        this.move.play()
        this.move.weight = 0
        this.catch.weight = 0
        this.activeAnimation = this.idle

        this.animationsActions.push(this.idle)
        this.animationsActions.push(this.move)
        this.animationsActions.push(this.catch)

        this.scene.importObj(this.gltf)

    })
  }

  resetPosition(){
    this.moveGltfNull.position.set(0, 0, 0)
    this.moveGltfNull.rotation.y = 0
  }

  checkIntersections(box){
    return this.boundingBox.intersectsBox(box)
  }

  changeActiveAnimation(animation){
      this.changeAnimation = true
      switch(animation){
          case 'MOVE':
              this.activeAnimation = this.move
              break
          case 'IDLE':
              this.activeAnimation = this.idle
              break
      }
  }

  changeAnimationToCatchObject(){
    this.onCatching = true
    this.activeAnimation.stop()
    this.catch.weight = 1
    this.catch.play()
    this.catch.setLoop(THREE.LoopRepeat, 1)
    setTimeout(() => {
        this.catch.weight = 0
        this.catch.stop()
        this.idle.play()
        this.move.play()
        this.onCatching = false
    }, 2250)
  }

  updateAnimation(){
    if (this.changeAnimation && this.activeAnimation.weight < 1 && !this.onCatching) {

        const stopAnimations = this.animationsActions.filter(animation => animation._clip.name !== this.activeAnimation._clip.name)
        stopAnimations.map(animation => {
            animation.weight -= 0.04
        })
        this.activeAnimation.weight += 0.04

        if(this.activeAnimation.weight >= 1) {
            this.changeAnimation = false
        }
    }
  }
}