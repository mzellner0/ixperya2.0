<template>
  <Header/>
  <Menu/>
  <Loader />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Loader from "@/components/Loader.vue";

export default {
  name: 'Ixperya',
  components: {
    Header,
    Menu,
    Loader
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  overflow-x: hidden;
  background: linear-gradient(#fff 22%, #bbc4cc 100%);
  min-height: 100vh;
  color: $color-header-dark;
  &::-webkit-scrollbar {
    width: 12px;
  }
    
  &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
      background-color: $color-header-dark;
      border-radius: 0px;
  }

  &::-webkit-scrollbar-thumb {
      background-color: white;
      border: 4px solid rgba(0, 0, 0, 0);
      border-radius: 10px;
      background-clip: content-box;
  }
}
</style>
