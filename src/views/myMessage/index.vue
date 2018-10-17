<template>
  <div>
    <div class="message">
      <div class="title">我的党建</div>
    </div>
    <div class="banner">
      <div class="tx"><img src="../../img/头像.png" alt=""></div>
      <router-link to="/login" v-if="!token">
        <div class="loging">还没有登录，请登录</div>
      </router-link>
      <div class="loging">{{userInfo.username}}</div>
    </div>
    <div class="bottom">

        <div class="text1" @click="people()">
          <img src="../../img/icon1.png" alt="" class="sipp">
          <div class="text"> 个人信息</div>
          <img src="../../img/arrow.png" alt="" class="arrow">
        </div>


        <div class="text1" @click="personScore()">
          <img src="../../img/icon2.png" alt="" class="sipp">
          <div class="text"> 个人量化积分</div>
          <img src="../../img/arrow.png" alt="" class="arrow">
        </div>


        <div class="text1" @click="passwordG()">
          <img src="../../img/icon3.png" alt="" class="sipp">
          <div class="text"> 修改密码</div>
          <img src="../../img/arrow.png" alt="" class="arrow">
        </div>


        <div class="text1" @click="payment()">
          <img src="../../img/icon4.png" alt="" class="sipp">
          <div class="text"> 党费缴纳</div>
          <img src="../../img/arrow.png" alt="" class="arrow">
        </div>

    </div>
  </div>


</template>

<script>
  import router from '../../router/index'
  import {mapState, mapMutations} from 'vuex'
    export default {
        name: "index",
      data(){
          return {}
      },
      methods:{
        ...mapMutations(['setUser','setToken']),
        payment(){
          router.push('/payment')
        },
        people(){
          router.push('/peresonMessage')
        },
        personScore(){
          router.push('/personScore')
        },
        passwordG(){
          router.push('/passwordG')
        }
      },
      computed: {
        ...mapState(['token','userInfo'])
      }
    }
</script>

<style scoped lang="scss">
  .message{
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

  .banner{
    background: #c50206;
    width: 7.5rem;
    height: 2.8126rem;
    text-align: center;
    .loging{
      text-align: center;
      width: 7.5rem;
      height: 0.32rem;
      color: #fff;
      font-size:0.15rem;

    }
    .tx{
      font-size: 0;
      margin-bottom: 0.1rem;
      img{
        width: 1.25rem;
        height: 1.25rem;
        margin-top: 0.72916rem;
      }
    }
  }

  .bottom{
    display: flex;
    flex-direction: column;
    .text1{
      display: flex;
      width: 7.54rem;
      height: 1.08rem;
      padding: 0.32rem 1.08rem;
      border: 0.02rem solid #ccc;
      margin: -0.02rem;
      box-sizing: border-box;
      font-size: 0;
      position: relative;
      .text{
        font-size: 0.3rem;
      }
      .sipp{
        width: 0.64rem;
        height: 1.04rem;
        padding: 0.2rem 0;
        box-sizing: border-box;
        position: absolute;
        left: 0.2rem;
        top: 0;
      }
      .arrow{
        width: 0.1534rem;
        height: 1.04rem;
        padding: 0.4rem 0;
        box-sizing: border-box;
        position: absolute;
        right: 0.2rem;
        top: 0;
      }
    }
  }

a{
  text-decoration: none;

}
</style>
