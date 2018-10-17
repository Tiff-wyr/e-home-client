<template>
    <div>
      <div class="inform">
        <div class="title">掌上生活</div>
      </div>
      <div class="img">
        <img src="../../img/timg.jpg" alt="">
      </div>
      <div class="space">
        <div class="top">
          <div class="left">
            <img src="../../img/icon1.png" alt="">
            <div class="text">政治学习</div>
          </div>
          <div class="middle">
            <img src="../../img/icon2.png" alt="">
            <div class="text">思想汇报</div>
          </div>
          <div class="right">
            <img src="../../img/icon3.png" alt="">
            <div class="text">心得体会</div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../img/icon4.png" alt="">
            <div class="text">民主评议</div>
          </div>
          <div class="middle">
            <img src="../../img/icon5.png" alt="" @click="map()">
            <div class="text1">流动党员找组织</div>
          </div>
          <div class="right">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import router from '../../router/index'
    export default {
        name: "index",
      data(){
          return {}
      },
      methods:{
        map(){
          router.push('/mapDetail')
        }
      },

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
  .img{
    font-size: 0;
    img{
      width: 7.5rem;
      height: 3.7226rem;
    }
  }
  .space{
    display: flex;
    flex-direction: column;
    height: 6.2rem;
    .top{
      display: flex;
    }
    .bottom{
      display: flex;
    }
    .left,.middle,.right{
      display: flex;
      flex-direction: column;
      font-size: 0;
      width: 2.5rem;
      height: 2.9rem;
      padding: 0.3rem 0.4rem;
      box-sizing: border-box;
      text-align: center;
    }
    .text{
      width: 1.7rem;
      height: 0.4rem;
      font-size: 0.3rem;
    }
    .text1{
      width: 1.7rem;
      height: 0.8rem;
      font-size: 0.3rem;
    }
    img{
      width: 1.7rem;
      height: 1.7rem;
      margin-bottom: 0.1rem;
    }
  }
</style>
