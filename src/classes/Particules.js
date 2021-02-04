import * as THREE from "../../node_modules/three/build/three.module.js"
import { clampValue, getPosNeg, getRandom } from "../utils/utils.js"
import TWEEN from '@tweenjs/tween.js'

export default class Particules {
    constructor(fileTexture, jeu){
        this.fileTexture = fileTexture
        this.scene = jeu.scene
        this.jeu = jeu
        this.init()
    }

    init(){
        this.createSprites(0, 0, this.jeu.card.firstGltfChild.position.x, this.jeu.card.firstGltfChild.position.z, 0)
        this.changeDirectionParticles()
        this.animate()
    }

    fadeInElmt (delay) {
        this.arraySprites.map(sprite => {
            new TWEEN.Tween(sprite.material).to({ opacity: 1 }, delay).easing(TWEEN.Easing.Quadratic.Out).start()
        })
    }

    createSprite(x, z, addSub, opcatity){
        const spriteMap = new THREE.TextureLoader().load(this.fileTexture)
        spriteMap.minFilter = THREE.NearestFilter
        const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, transparent: true, opacity: opcatity })
        spriteMaterial.map.encoding = THREE.sRGBEncoding
        let sprite = new THREE.Sprite(spriteMaterial)
        sprite.scale.set(0.3, 0.3, 0.3)

        sprite = this.setSpritePosition(sprite, x, z, addSub)

        this.groupSprites.add(sprite)
        this.arraySprites.push(sprite)
    }

    setSpritePosition(sprite, x, z, addSub){
        switch(addSub){
            case "add":
                sprite.position.z = z + Math.random() * 2
                sprite.position.x = x + Math.random() * 2
                sprite.position.y = 10 + Math.random() * 2
                break
            case "sub":
                sprite.position.z = z - Math.random() * 2
                sprite.position.x = x - Math.random() * 2
                sprite.position.y = 10 + Math.random() * 2
                break
        }
        return sprite
    }

    createSprites(xInit, zInit, xEnd, zEnd, opacity){
        this.groupSprites = new THREE.Group()
        this.arraySprites = [];
        this.scene.importObj(this.groupSprites)

        const calculateXZ = (distance) => {
            let d = 0
            let x = xInit
            let z = zInit
            while (d < distance){
                let f = 0
                while(f < pMax){
                    this.createSprite(x, z, "add", opacity)
                    f++
                }
                d++
                x = x + (xEnd-xInit)/distance
                z = z + (zEnd-zInit)/distance
            }
        }

        const pMax = 1;
        const distance = Math.sqrt((xEnd - xInit)*(xEnd - xInit) + (zEnd - zInit)*(zEnd - zInit))
        calculateXZ(distance);
    }

    createSpritesDoorRobot(){
        this.stopAnimate()
        this.createSprites(this.jeu.robot.firstGltfChild.position.x, this.jeu.robot.firstGltfChild.position.z, this.jeu.door.firstGltfChild.position.x, this.jeu.door.firstGltfChild.position.z, 1)
        this.changeDirectionParticles()
        this.playAnimate()
    }

    removeSprites(setParticules){
        this.arraySprites.map(sprite => {
            this.groupSprites.remove(sprite)
        })
        this.arraySprites = []
        switch(setParticules){
            case "doorRobot":
                this.createSpritesDoorRobot()
                break
        }
    }

    changeDirectionParticles(){
        this.groupSprites.children.map(child => {
            this.changeDirectionParticle(child)
            child.minValueX = child.position.x-1
            child.maxValueX = child.position.x+1
            child.minValueY = child.position.y-1
            child.maxValueY = child.position.y+1
            child.minValueZ = child.position.z-1
            child.maxValueZ = child.position.z+1
        })
    }

    changeDirectionParticle(child){
        child.randDirectionX = getPosNeg()
        child.randDirectionY = getPosNeg()
        child.randDirectionZ = getPosNeg()
        child.counter = 1
        child.maxCounter = Math.round(getRandom(50, 100))
    }

    stopAnimate(){
        cancelAnimationFrame(this.idAnimateFunction);
    }

    playAnimate(){
        this.idAnimateFunction = requestAnimationFrame(this.animate.bind(this))
    }

    animate(){
        this.playAnimate()
        this.groupSprites.children.map(child => {
            if(child.counter % child.maxCounter === 0){
                this.changeDirectionParticle(child)
            }
            child.counter++
        })
        this.groupSprites.children.map(child => {
            child.position.x = clampValue(child.position.x + 0.004 * child.randDirectionX, child.minValueX, child.maxValueX)
            child.position.y = clampValue(child.position.y + 0.004 * child.randDirectionY, child.minValueY, child.maxValueY)
            child.position.z = clampValue(child.position.z + 0.004 * child.randDirectionZ, child.minValueZ, child.maxValueZ)
        })
    }
}