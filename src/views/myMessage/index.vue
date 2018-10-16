<template>
  <div>
    <div class="message">
      <div class="title">我的党建</div>
    </div>
    <div class="banner">
      <div class="tx"><img src="../../img/头像.png" alt=""></div>
      <div class="login">还没有登录，请登录</div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
  .message{
    background: #c50206;
    padding: 0 10px;
  }
  .title{
    text-align: center;
    color: #fff;
    font-size: 18px;
    height: 43px;
    line-height: 43px;
  }
  .banner{
    background: #c50206;
    width: 7.5rem;
    height: 2.08rem;
    text-align: center;
  }
  .login{
    color: #fff;
    font-size:16px;
  }
  .tx{
    padding: 0.84rem 0 0 0 ;
    img{
      width: 1.24rem;
      height: 1.24rem;
    }

  }


</style>
