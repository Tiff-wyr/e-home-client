<template>
    <div v-html="message" class="today"></div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            message:''
          }
      },
      methods:{
          getToday(){
            this.$axios.get('/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70502%2Findex.html').then(res=>{
              console.log(res);
              
              this.message=res
            })
          }
      },
      created(){
          this.getToday()
      }
    }
</script>

<style scoped lang="scss">

</style>
