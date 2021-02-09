<template>
  <div class="menu-jeu">
    <div :class="['menu-jeu__buttons', { 'hidden': hideButtonsMenu }]">
        <button class="menu-jeu__catchButton" @click="onClickCatchButton">
          <font-awesome-icon
            class="icon"
            :icon="['fas', 'hand-paper']"
          />
        </button>
        <button class="menu-jeu__inventoryButton" @click="onClickInventoryButton">
          <font-awesome-icon
            class="icon"
            :icon="['fas', 'box-open']"
          />
        </button>
    </div>
    <div :class="['menu-jeu__inventory', { 'hidden': hideInventory }]">
        <ul class="menu-jeu__inventoryList">
            <li class="menu-jeu__inventoryEmpty" v-if="!cardInInventory">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'ban']"
              />
            </li>
            <li v-if="cardInInventory" @click="onClickOnCard">
              <img src="@/assets/img/imgMenuJeu/card.png" alt="card" />
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "MenuJeu",
  props: {
    robot: { type: Object, default: () => {} },
    card: { type: Object, default: () => {} },
    door: { type: Object, default: () => {} },
    particules: { type: Object, default: () => {} }
  },
  computed: {
    ...mapState(['hideButtonsMenu', 'hideInventory', 'cardInInventory'])
  },
  methods: {
    ...mapActions([
      'toggleShowCatchArrowPossible', 
      'toggleHideInventory', 
      'toggleCardInInventory', 
      'toggleShowInventoryArrowPossible'
    ]),
    onClickCatchButton(){
      this.robot.changeAnimationToCatchObject()
      if(this.robot.firstGltfChild.position.x <= this.card.firstGltfChild.position.x + this.card.distanceToRobot 
      && this.robot.firstGltfChild.position.x >= this.card.firstGltfChild.position.x - this.card.distanceToRobot
      && this.robot.firstGltfChild.position.z <= this.card.firstGltfChild.position.z + this.card.distanceToRobot
      && this.robot.firstGltfChild.position.z >= this.card.firstGltfChild.position.z - this.card.distanceToRobot){
        setTimeout(() => {
            this.card.fadeOutElmt(this.delayOfAnimationStart);
            // this.inventory.addObject('card', this.addEventOnObjectCard.bind(this))
            this.particules.removeSprites("doorRobot");
            this.toggleCardInInventory();
            this.toggleShowCatchArrowPossible();
            this.toggleHideInventory();

            setTimeout(() => {
              this.toggleHideInventory();
            }, 1000);
        }, 1300)
      }
    },
    onClickInventoryButton() {
      this.toggleHideInventory();
    },
    onClickOnCard() {
      if(this.robot.firstGltfChild.position.x <= this.door.firstGltfChild.position.x + this.door.distanceToRobot 
      && this.robot.firstGltfChild.position.x >= this.door.firstGltfChild.position.x - this.door.distanceToRobot
      && this.robot.firstGltfChild.position.z <= this.door.firstGltfChild.position.z + this.door.distanceToRobot
      && this.robot.firstGltfChild.position.z >= this.door.firstGltfChild.position.z - this.door.distanceToRobot){
          this.toggleCardInInventory();
          this.door.openDoors();
          this.toggleShowInventoryArrowPossible();
          setTimeout(() => {
            this.toggleHideInventory();
          }, 200);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  opacity: 0;
  pointer-events: none;
}

.menu-jeu{
  position: absolute;
  width: 20%;
  margin-left: 40%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  bottom: 30px;
  z-index: 1;
  height: 70px;
  @include breakpoint (600) {
    width: 80%;
    margin-left: 10%;
  }
  button {
    z-index: inherit;
    margin: 0px 5px;
    width: 50px;
    height: 50px;
    background-color: $color-header-dark;
    border: solid 2px $color-header-middle;
    border-radius: 100px;
    transition: 200ms;
    outline: none;
    cursor: pointer;
    &:hover{
      background-color: $color-header-middle;
      border-color: $color-header-dark;
      animation: hover-scales 500ms ease-in-out;
    }
  }
  .icon {
    color: white;
    font-size: 18px;
  }
  &__inventory{
    z-index: 1;
    margin-bottom: 20px;
    background-color: $color-header-dark;
    border-radius: 10px;
    z-index: 10;
    min-height: 120px;
    min-width: 120px;
    transition: 200ms;
    ul{
      z-index: inherit;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li{
        border: solid 3px $color-header-middle;
        border-radius: 10px;
        margin: 5px;
        z-index: inherit;
        cursor: pointer;
        &:hover:not(.menu-jeu__inventoryEmpty){
          animation: hover-scales 500ms ease-in-out;
        }
    }
    img{
      z-index: inherit;
      height: 100px;
    }
  }
  &__inventoryEmpty{
    min-width: 104px;
    min-height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: auto !important;
    .icon{
        font-size: 30px;
    }
  }
}
</style>