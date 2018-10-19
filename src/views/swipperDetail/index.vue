<template>
  <div>
    <div class="message">
      <div @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyiye"></use>
        </svg>
      </div>
      <div class="title">{{biaoti}}</div>
    </div>
    <div class="swipperDetail">
      <div class="title">{{formData.title}}</div>
      <div class="content" v-html="formData.content"></div>
    </div>
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
              biaoti:'',
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
          },
          getTitle(id){
            let title='';
            switch (id){
              case "2679" :
                title = '随时随地学'
                break
              case "2656" :
                title = '随时随地学'
                break
              case "2681" :
                title = '信工新闻眼'
                break
              case "2592" :
                title = '信工新闻眼'
                break
            }
            this.biaoti=title
        }
      },
      created(){
          let id=this.$route.params.id
          this.getDetail(id)
          this.getTitle(id)
      }
    }
</script>

<style scoped lang="scss">
  .message{
    width: 7.5rem;
    background: #c50206;
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
.title{
   font-size: 0.5rem;
  font-weight: bold;
 }
.content{
  font-size: 0.4rem;
  font-weight: lighter;
}

</style>
