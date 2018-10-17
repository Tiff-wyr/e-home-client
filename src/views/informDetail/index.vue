<template>
<div class="informDetail">
  <div class="title">{{formData.title}}</div>
  <div v-html="formData.content" class="content"></div>
</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            formData:{
              title:'',
              content:''
            }
          }
      },
      methods:{
          getDetail(id){
            this.$axios.get(`/hhdj/news/newsContent.do?newsId=${id}`).then(res=>{
              if (res.code == 1){
                this.formData=res.data
              }

            })
          }
      },
      created(){
          let id=this.$route.params.id
         this.getDetail(id)
      }
    }
</script>

<style scoped>
  .informDetail{
    padding: 0.1rem;
  }
.title{
  font-weight: bold;
  font-size: 0.4rem;
  margin: 0.1rem 0;
}
  .content{
    font-weight: 400;
    font-size: 0.3rem;
  }
</style>
