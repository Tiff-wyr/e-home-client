<template>
  <div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer'
    export default {
      name: "index",
      components: {
      Footer
    }
    }
</script>

<style scoped>

</style>
