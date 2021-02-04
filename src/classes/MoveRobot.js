import { MathUtils } from "../../node_modules/three/src/math/MathUtils.js"
import { clampValue } from "../utils/utils.js"
import * as THREE from "../../node_modules/three/build/three.module.js"
import Door from "./Door.js"
import ObjectJeu from "./ObjectJeu.js"

export default class MoveRobot {
  constructor(jeu){
      this.jeu = jeu
      this.robot = jeu.robot
      this.cameraGroup = jeu.scene.cameraGroup
      this.canvas = jeu.canvas
      this.scene = jeu.scene
      this.door = jeu.door
      this.assetsToCollide = jeu.assetsToCollide
      this.assetsToIntercept = jeu.assetsToIntercept
      // this.tuto = jeu.tuto

      this.move = false
      this.velocity = 0.1

      this.directionRobot = new THREE.Vector3()
      this.robotCanBeBlock = true

      this.activeObjectClose = null
      this.init()
  }

  init(){
      this.createVectors()

      this.onMouseMoveBind = this.onMouseMove.bind(this)
      this.onTouchMoveBind = this.onTouchMove.bind(this)
      this.addEventOnMouseDown(this.onMouseMoveBind)
      this.addEventOnMouseUp(this.onMouseMoveBind)
      this.addEventOnTouchStart(this.onTouchMoveBind)
      this.addEventOnTouchEnd(this.onTouchMoveBind)

      this.animate()
  }

  hideTuto(){
      this.tuto.hideGrabCursor()
  }

  checkIntersectionsBeforeMoving(){
      this.robot.firstGltfChild.getWorldDirection(this.directionRobot)

      const assetsIntercepted = this.assetsToCollide.map(asset => {
          return asset.boundingBox.map(boundingBox => {
              return this.robot.checkIntersections(boundingBox)
          })
      })
      const isIntercepted = assetsIntercepted[0].filter(intersectAsset => intersectAsset === true)
      if(isIntercepted.length > 0){
          return true
      } else {
          return false
      }
  }

  checkPositionWithInteractions(){
      this.assetsToIntercept.map(asset => {
          if(this.robot.firstGltfChild.position.x <= asset.firstGltfChild.position.x + asset.distanceToRobot 
          && this.robot.firstGltfChild.position.x >= asset.firstGltfChild.position.x - asset.distanceToRobot
          && this.robot.firstGltfChild.position.z <= asset.firstGltfChild.position.z + asset.distanceToRobot
          && this.robot.firstGltfChild.position.z >= asset.firstGltfChild.position.z - asset.distanceToRobot){
              asset.changeColor()
              if (asset instanceof Door && this.tuto.showArrowInventoryPossible) {
                  this.tuto.showArrowInventory()
                  this.activeObjectClose = "door"
              } else if (asset instanceof ObjectJeu && this.tuto.showArrowCatchPossible) {
                  this.tuto.showArrowCatch()
                  this.activeObjectClose = "cart"
              }
          } else {
              asset.revertColor()
              if (asset instanceof Door && this.activeObjectClose === "door") {
                  this.tuto.hideArrowInventory()
                  this.activeObjectClose = null
              } else if (asset instanceof ObjectJeu && this.activeObjectClose === "cart") {
                  this.tuto.hideArrowCatch()
                  this.activeObjectClose = null
              }
          }
      })
  }

  createVectors(){
      this.origin = {
          x: innerWidth / 2,
          y: innerHeight / 2
      }
      this.vectorBot = {
          x: innerWidth / 2,
          y: -1
      }
  }

  rotateRobot(rotateY){
      this.robot.onCatching ? null : this.robot.firstGltfChild.rotation.y = MathUtils.degToRad(rotateY)
  }

  moveRobot(){
      this.move = true
  }

  stopRobot(){
      this.move = false
  }

  calculateVelocity(vectorMouse){
      const positionX = Math.abs(vectorMouse.x)
      const positionY = Math.abs(vectorMouse.y)
      if(positionX > positionY) {
          this.velocity = clampValue(positionX * 0.002, 0, 0.7)
      } else {
          this.velocity = clampValue(positionY * 0.002, 0, 0.7)
      }
  }

  //calcule la rotation pour un événement click
  calculateRotationMouse(event){
      this.vectorClient = {
          x: event.clientX - this.origin.x, 
          y: -(event.clientY - this.origin.y)
      }
      return MathUtils.radToDeg(Math.atan2(this.vectorClient.y, this.vectorClient.x) - Math.atan2(this.vectorBot.y, this.vectorBot.x)) + 90
  }

  //calcule la rotation pour un événement touch
  calculateRotationTouch(event){
      event.preventDefault()
      this.vectorClient = {
          x: event.touches[0].pageX - this.origin.x, 
          y: -(event.touches[0].pageY - this.origin.y)
      }
      return MathUtils.radToDeg(Math.atan2(this.vectorClient.y, this.vectorClient.x) - Math.atan2(this.vectorBot.y, this.vectorBot.x)) + 90
  }

  updateRotateRobotBeforeMove(event, functionRotateY){
      const rotateY = this.robot.onCatching ? 0 : functionRotateY(event)
      this.rotateRobot(rotateY)
  }

  addEventToMoveRobot(typeEvent, eventFunction){
      this.robot.changeActiveAnimation('MOVE')
      document.querySelector('body').addEventListener(typeEvent, eventFunction, {passive: false})
      this.moveRobot()
  }

  removeEventToStopeRobot(typeEvent, eventFunction){
      this.robot.changeActiveAnimation('IDLE')
      document.querySelector('body').removeEventListener(typeEvent, eventFunction, {passive: false})
      this.stopRobot()
  }

  onMouseMove(event){
      const rotateY = this.calculateRotationMouse(event)
      this.rotateRobot(rotateY)
      this.calculateVelocity(this.vectorClient)
  }

  addEventOnMouseDown(eventFunction) {
      this.canvas.addEventListener('mousedown', (event) => {
          this.canvas.style.cursor = 'grabbing'

          // this.hideTuto()
          this.updateRotateRobotBeforeMove(event, this.calculateRotationMouse.bind(this))
          this.addEventToMoveRobot('mousemove', eventFunction)
      })
  }

  addEventOnMouseUp(eventFunction) {
      this.canvas.addEventListener('mouseup', () => {
          this.canvas.style.cursor = 'grab'
          this.removeEventToStopeRobot('mousemove', eventFunction)
      })
  }

  onTouchMove(event){
      const rotateY = this.calculateRotationTouch(event)
      this.rotateRobot(rotateY)
      this.calculateVelocity(this.vectorClient)
  }

  addEventOnTouchStart(eventFunction) {
      this.canvas.addEventListener('touchstart', (event) => {
          event.preventDefault()

          // this.hideTuto()
          this.updateRotateRobotBeforeMove(event, this.calculateRotationTouch.bind(this))
          this.addEventToMoveRobot('touchmove', eventFunction)
      }, {passive: false})
  }

  addEventOnTouchEnd(eventFunction) {
      this.canvas.addEventListener('touchend', () => {
          this.removeEventToStopeRobot('touchmove', eventFunction)
      })
  }
  checkIfRobotWin(){
      if (this.door.doorOpen) {
          if (this.robot.firstGltfChild.position.x >= -3 && this.robot.firstGltfChild.position.x <= 3
              && this.robot.firstGltfChild.position.z <= this.jeu.doorPositionMinZ) {
                  this.jeu.goToIntroPage()
          }
      }
  }

  translateRobot(){
      // this.checkPositionWithInteractions()
      const isIntercepted = this.checkIntersectionsBeforeMoving()

      if(isIntercepted && this.move){
          this.robot.firstGltfChild.translateZ(this.velocity)

          if(this.robotCanBeBlock === true){
              this.robotCanBeBlock = false

              this.xClampMin = -this.scene.numberOfPoint*10/2
              this.xClampMax = this.scene.numberOfPoint*10/2 - 10
              if(this.directionRobot.z < 0){
                  this.zClampMin = this.door.firstGltfChild.position.z + 3
                  this.zClampMax = this.scene.numberOfLine*10/2 - 10
              } else {
                  this.zClampMin = -this.scene.numberOfLine*10/2
                  this.zClampMax = this.door.firstGltfChild.position.z - 3
              }

          }

          this.robot.firstGltfChild.position.z = clampValue(this.robot.firstGltfChild.position.z, this.zClampMin, this.zClampMax)
          this.robot.firstGltfChild.position.x = clampValue(this.robot.firstGltfChild.position.x, this.xClampMin, this.xClampMax)


      } else if(this.move && !this.robot.onCatching){
          this.robotCanBeBlock = true
          this.robot.firstGltfChild.translateZ(this.velocity)

          //clamp value pour rester dans l'espace du décor
          this.robot.firstGltfChild.position.x = clampValue(this.robot.firstGltfChild.position.x, -this.scene.numberOfPoint*10/2, this.scene.numberOfPoint*10/2 - 10)
          this.robot.firstGltfChild.position.z = clampValue(this.robot.firstGltfChild.position.z, -this.scene.numberOfLine*10/2, this.scene.numberOfLine*10/2 - 10)

      } else {
          this.robot.firstGltfChild.translateZ(0)
      }
  }

  stopAnimate(){
      cancelAnimationFrame(this.idAnimateFunction);
  }

  playAnimate(){
      this.idAnimateFunction = requestAnimationFrame(this.animate.bind(this))
  }

  animate(){
      this.playAnimate()

      this.translateRobot()
      this.checkIfRobotWin()

      this.cameraGroup.position.copy(this.robot.firstGltfChild.position)
  }
}