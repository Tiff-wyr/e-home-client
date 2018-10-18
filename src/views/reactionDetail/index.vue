<template>
    <div>
      ahha
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            formData:[],
          }
      },
      methods:{
          getPeople(id){


          },
          getData(){

        }
      },
      created(){
          let id=this.$route.params.id
          this.getPeople(id)
          this.getData()
      }
    }
</script>

<style scoped lang="scss">

</style>
