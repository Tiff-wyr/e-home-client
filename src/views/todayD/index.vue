<template>
    <div class="today">
      <div class="content" v-html="message"></div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
              message:'',
          }
      },
      methods:{
          getToday(){
            this.$axios.get('/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70502%2Findex.html').then(res=>{
              let str =res.split("<!--content-->")[1]
              this.message=str.split("<!--p1 end-->")[0]
              console.log(this.message);
            })
          }
      },
      created(){
          this.getToday()
      }
    }
</script>

<style scoped lang="scss">
  .content {
    width: 7.5rem;
    height: 100%;
    font-size: 0;
  }
</style>
