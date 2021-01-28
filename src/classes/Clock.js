import Gltf from "./Gltf";
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default class Clock extends Gltf{
    constructor(scene, importFile, isAnimations, callback){
      super(scene, importFile, isAnimations, callback)
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
            const textureIntBracelet = new THREE.TextureLoader().load(require('@/assets/clock_textures/bracelet_int.jpg'));

            this.materialAiguillesColor = new THREE.MeshPhysicalMaterial({color: 0xc90000, roughness: 0.5})
            this.materialAiguilles = new THREE.MeshPhysicalMaterial({color: 0xffffff, metalness: 1, roughness: 0.1})
            this.materialCadran = new THREE.MeshPhysicalMaterial({color: 0xffffff, metalness: 1, roughness: 0.2})
            this.materialBracelet = new THREE.MeshPhysicalMaterial({color: 0x000000, roughness: 0.5})
            this.materialBraceletInt = new THREE.MeshPhysicalMaterial({map: textureIntBracelet, roughness: 0.5})
            this.materialBraceletLaniere = new THREE.MeshPhysicalMaterial({color: 0x000000, roughness: 0.5})
            this.materialCadranInt = new THREE.MeshPhysicalMaterial({color: 0xffffff, roughness: 0.8})
            this.materialTitleCadran = new THREE.MeshPhysicalMaterial({color: 0x000000, roughness: 0.8})
            this.materialGlass = new THREE.MeshPhysicalMaterial({color: 0xffffff, roughness: 0.1, transparent: true, opacity: 0.4})

            object.scene.traverse((node) => {
                if (node.name === "aiguilles_color") {
                  node.material = this.materialAiguillesColor
                }
                if (node.name === "glass_top") {
                  node.material = this.materialGlass
                }
                if (node.name === "aiguillles") {
                  node.material = this.materialAiguilles
                }
                if (node.name === "bracelet") {
                  node.material = this.materialBracelet
                }
                if (node.name === "bracelet_int") {
                   node.material = this.materialBraceletInt
                }
                if (node.name === "bracelet_laniere") {
                  node.material = this.materialBraceletLaniere
                }
                if (node.name === "cadran" || node.name === "close" || node.name === "fermeture") {
                  node.material = this.materialCadran
                }
                if (node.name === "cadran_int" || node.name === "color_int_cadran") {
                  node.material = this.materialCadranInt
                }
                if (node.name === "title_cadran") {
                  node.material = this.materialTitleCadran
                }
                if (node.isMesh) {
                  node.frustumCulled = false
                  node.material.envMap = textureCube
                  node.material.envMapIntensity = 2
                  if(node.material.map){
                      node.material.map.encoding = THREE.sRGBEncoding
                  }
                }
            })
            
            this.gltf = object.scene
            this.firstGltfChild = object.scene.children[0]
                
            if(this.callback){
                this.callback(object)
            }

            this.scene.importObj(this.gltf)
        })
    }

    changeColorCadran(color){
        this.materialCadran.color.setHex(color)
    }

    changeColorAiguille(color){
        this.materialAiguilles.color.setHex(color)
    }

    changeColorAiguilleColor(color){
        this.materialAiguillesColor.color.setHex(color)
    }

    changeColorBracelet(color){
        this.materialBracelet.color.setHex(color)
        this.materialBraceletLaniere.color.setHex(color)
    }
}