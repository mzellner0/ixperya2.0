import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default class Gltf {
    constructor(scene, importFile, isAnimations, callback) {
        this.scene = scene;
        this.importFile = importFile;
        this.isAnimations = isAnimations;
        this.callback = callback;
        this.clock = new THREE.Clock();
        this.init();
    }

    init() {
        this.importGltf();
        this.animate();
    }

    importGltf() {
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
                    node.material.transparent = true
                    // node.material.opacity = this.opacityInit
                    node.material.envMap = textureCube
                    node.material.envMapIntensity = 2
                    if(node.material.map){
                        node.material.map.encoding = THREE.sRGBEncoding
                    }
                }
            })
            
            this.gltf = object.scene
            this.firstGltfChild = object.scene.children[0]

            // this.createBoudingBox();

            if(this.isAnimations){
                this.animationsList = object.animations;
                this.mixer = new THREE.AnimationMixer(object.scene);

                this.animationsList.map(animation => {
                    const action = this.mixer.clipAction(animation);
                    action.stop();
                })
            }
                
            if(this.callback){
                this.callback()
            }

            this.scene.importObj(this.gltf);
        })
    }

    playAnimation(animationName){
        const animationToPlay = THREE.AnimationClip.findByName(this.animationsList, animationName)
        const mixerOfAnimation = this.mixer.clipAction(animationToPlay)
        mixerOfAnimation.play()
    }

    stopAnimate(){
        cancelAnimationFrame(this.idAnimateFunction);
    }

    playAnimate(){
        this.idAnimateFunction = requestAnimationFrame(this.animate.bind(this))
    }

    animate(){
        this.playAnimate()

        if (this.mixer) {
            const delta = this.clock.getDelta()
            this.mixer.update(delta)
        }

        // this.animateBoundingBox()
    }
}