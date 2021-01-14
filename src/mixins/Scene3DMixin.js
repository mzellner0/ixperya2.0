import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
    data: function() {
        return {
            scene: null,
            cameraGroup: null,
            camera: null,
            widthFactor: 1,
            heightFactor: 1,
            camPos: { x: 0, y: 0, z: 5 },
            htmlElmt: null,
            renderer: null,
            isOrbitControls: false,
        }
    },
    methods: {
        init3DScene (htmlElmt) {
            this.htmlElmt = htmlElmt;
            this.createScene();
            this.createCamera();
            this.createRenderer();
            this.createLights();
            this.onResize();
            console.log(this.scene)
            console.log(this.renderer)
    
            this.animate();
        },
        createScene () {
            this.scene = new THREE.Scene();
        },
        createCamera() {
            this.cameraGroup = new THREE.Group();
            this.scene.add(this.cameraGroup);
            this.camera = new THREE.PerspectiveCamera(50, (window.innerWidth / this.widthFactor) / (window.innerHeight / this.heightFactor), 1, 1000);
            this.camera.position.z = this.camPos.z;
            this.camera.position.y = this.camPos.y;
            this.camera.position.x = this.camPos.x;
            this.cameraGroup.attach(this.camera);
    
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            this.scene.add( cube );
        },
        createRenderer() {
            this.renderer = new THREE.WebGL1Renderer({ canvas: this.htmlElmt, alpha: true, antialias: true });
            this.renderer.setSize((window.innerWidth / this.widthFactor), (window.innerHeight / this.heightFactor));
            this.renderer.setClearColor(0x000000, 0)
            this.renderer.gammaOutput = true
            if (this.isOrbitControls) {
                this.controls = new OrbitControls(this.camera, this.renderer.domElement)
                this.controls.enableZoom = false
            }
        },
        createLights(){
            const ambientLight = new THREE.AmbientLight( 0xbfbfbf ); // soft white light
            this.scene.add( ambientLight );
        },
        stopAnimate(){
            cancelAnimationFrame(this.idAnimateFunction);
        },
        playAnimate(){
            this.idAnimateFunction = requestAnimationFrame(this.animate.bind(this))
        },
        animate(){
            // this.playAnimate();
            // requestAnimationFrame(this.animate.bind(this));
            this.renderer.render(this.scene, this.camera);
        },
        onResize(){
            window.addEventListener('resize', () => {
                // this.checkScreen()
                this.renderer.setSize( (window.innerWidth / this.widthFactor), (window.innerHeight / this.heightFactor) );
                this.camera.aspect = (window.innerWidth / this.widthFactor) / (window.innerHeight / this.heightFactor);
                this.camera.updateProjectionMatrix();
            })
        }
    }
}