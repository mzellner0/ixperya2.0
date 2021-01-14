<template>
    <header>
        <img alt="logo" src="@/assets/svg/logoEpais.svg">
        <div class="text-header">
            <h1>IXPERYA</h1>
            <p>Développement web</p>
        </div>
        <div class="menuOpener">
            <p>Menu</p>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Home',
  components: { 
  }
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    > * {
        z-index: inherit;
    }
    .text-header {
        height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        margin-right: 40%;
        h1 {
            font-family: $police-logo;
            font-weight: 400;
            font-size: 50px;
            color: $color-header-dark;
            user-select: none;
            pointer-events: none;
            transition: 200ms;
            opacity: 1;
            margin-bottom: 5px;
        }
        p {
            margin: 0;
            font-family: $police-logo;
            font-size: 20px;
            color: $color-header-dark;
            user-select: none;
            pointer-events: none;
            transition: 200ms;
            opacity: 1;
            text-transform: uppercase;
        }
    }
    img {
        user-select: none;
        max-width: 50px;
        margin-left: 30px;
    }
    .menuOpener {
        width: 50px;
        margin-right: 30px;
        margin-bottom: 5px;
        position: fixed;
        right: 10px;
        top: 10px;
        cursor: pointer;
        p{
            font-family: $police-logo;
            color: $color-header-dark;
            font-size: 12px;
            font-weight: 600;
        }
        div {
            background-color: $color-header-middle;
            border-radius: 3px;
            height: 8px;
            width: 100%;
            margin: 7px 0px;
            transform-origin: right center;
            transition: 200ms;
        }
    }
    @media (max-width: 500px){
        .text-header {
            height: 110px;
            h1 {
                font-size: 40px;
            }
            p {
                font-size: 15px;
            }
        }
        img {
            max-width: 40px;
            margin-left: 15px;
        }
        .menuOpener {
            font-size: 30px;
            margin-right: 15px;
        }
    }
}
</style>
