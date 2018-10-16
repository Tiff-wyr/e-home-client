<template>
  <div>
    <header></header>
    <router-view></router-view>
    <footer></footer>
  </div>

</template>

<script>
  import footer from '../../components/footer/index'
  import header from '../../components/header/index'
    export default {
      name: "index",
      components:[
        footer,
        header,
      ]
    }
</script>

<style scoped>

</style>
