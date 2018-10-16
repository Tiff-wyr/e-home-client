<template>
  <div class="login">
    <div class="main">
      <img src="../../img/后退.png" alt="" class="logout">
      <div class="title">登录</div>
      <div>
        <img src="../../img/logo.png" alt="">
      </div>
      <div class="inp">
        <form action="">
          <input type="text" placeholder="身份证号">
          <input type="text" placeholder="密码">
          <button class="button">登录</button>
        </form>
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped lang="scss">
  .login {
    background: #c50206;
    height: 100vh;
    .main {
      margin: 0 auto;
      width: 355px;
      .title {
        color: #fff;
        width: 355px;
        height: 43px;
        line-height: 43px;
        font-weight: 500;
        text-align: center;
      }
      img {
        display: block;
        width: 203px;
        height: 48px;
        margin: 30px auto;

      }
    }
  }

  input {
    background: #c50206;
    border: 1px solid #ff0;
    border-radius: 5px;
    padding: 0 5px;
    width: 300px;
    height: 41px;
    /*margin: 10px 0;*/
    color: #fff;
    font-weight: 500;
    box-sizing: border-box;
  }

  .inp {
    text-align: center;
  }

  .button {
    background: #e43228;
    width: 300px;
    height: 41px;
    border-radius: 5px;
    border: none;
  }

  .main .logout{
    position: fixed;
    left: 0;
    top: 0;
    width: 36px;
    height: 44px;
  }
</style>
