<template>
    <div class="swipperDetail">
      <div class="title">{{formData.title}}</div>
      <div class="content" v-html="formData.content"></div>
    </div>
</template>

<script>
    export default {
        name: "swipperDetail",
      data(){
          return {
            formData:{
              title:'',
              content:'',
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
          //router 有方法 push
        //route 参数
          let id=this.$route.params.id
          this.getDetail(id)
      }
    }
</script>

<style scoped lang="scss">
.title{
   font-size: 0.5rem;
  font-weight: bold;
 }
.content{
  font-size: 0.4rem;
  font-weight: lighter;
}

</style>
