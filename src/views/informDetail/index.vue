<template>
<div class="informDetail">
  <div class="message">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shangyiye"></use>
    </svg>
    <div class="title">登录</div>
  </div>
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

<style scoped lang="scss">
  .message{
    width: 7.5rem;
  .title{
    text-align: center;
    color: #fff;
    height: 0.86rem;
    line-height: 0.86rem;
    width: 7.1rem;
    margin: 0 auto;
    font-size: 0.34rem;
  }
  .icon{
    width: 0.9rem;
    height: 0.9rem;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }
  }

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
