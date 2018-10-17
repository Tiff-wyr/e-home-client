<template>
  <div>
    <div class="inform">
      <div class="title">通知早知道</div>
    </div>
    <div class="inform-wrap" v-for="(item,index) in formData" @click="inform(item.newsId)">
      <div class="inform-img">
        <img src="../../img/喇叭.png" alt="">
      </div>
      <div class="inform-right">
        <div class="title">{{item.title}}</div>
        <div class="time">{{item.currentTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../../router/index'
    export default {
      name: "index",
      data(){
          return {
            formData:[]
          }
      },
      methods:{
        getData(){
          this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res=>{
            if (res.code == 1){
              this.formData=res.rows
              console.log(res.rows);
            }

          })
        },
        inform(id){
          router.push(`/informDetail/${id}`)
        }
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped lang="scss">

  .inform{
    background: #c50206;
    width: 100%;
    .title{
      text-align: center;
      color: #fff;
      height: 0.86rem;
      line-height: 0.86rem;
      width: 7.1rem;
      margin: 0 auto;
      font-size: 0.34rem;
    }
  }


  .inform-wrap{
    width:7.5rem;
    height: 1.94rem;
    padding: 0.2rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    display: flex;
  }
  .inform-right{
    display: flex;
    flex-direction: column;
    .title{
      width: 5.48rem;
      height: 0.8rem;
      font-size: 0.3rem;
      color: #333;
    }
    .time{
      width: 5.48rem;
      height: 0.4rem;
      margin: 0.06rem 0;
      font-size: 0.2rem;
    }
  }
  .inform-img{
    width: 1.42rem;
    height: 1.52rem;
    padding: 0.4rem 0.1rem 0.1rem 0.1rem;
    box-sizing: border-box;
    font-size: 0;
    img{
      width: 0.7rem;
      height: 0.74rem;
    }
  }

</style>
