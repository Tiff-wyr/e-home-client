<template>
  <div class="login">
    <div class="message">
      <div class="title">登录</div>
    </div>
    <div class="tp">
      <img src="../../img/logo.png" alt="">
    </div>
    <div class="inp">
      <form action="">
        <input type="text" placeholder="身份证号">
        <input type="password" placeholder="密码">
        <button class="button">
          <router-link to="/myMessage">
            登录
          </router-link>

        </button>
      </form>
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
    width: 7.5rem;
    height: 100vh;
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
    }
  }

.tp{
  text-align: center;
  margin: 0.2rem 0;
  img{
    width: 4.0626rem;
    height: 0.9772rem;
  }
}

  input {
    background: #c50206;
    border: 1px solid #ff0;
    border-radius: 0.1rem;
    padding: 0 0.1rem;
    width: 6rem;
    height: 0.832rem;
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
    width: 6rem;
    height: 0.832rem;
    border-radius: 0.1rem;
    border: none;

    a{
      text-decoration: none;
      color: #fff;
    }
  }
  input::-webkit-input-placeholder{
    color: #fff;
  }
</style>
