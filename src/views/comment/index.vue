<template>
    <div>
      <div class="message">
        <div @click="$router.go(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyiye"></use>
          </svg>
        </div>
        <div class="title">掌上生活</div>
      </div>
      <div class="person" @click="summary">个人总结</div>
      <div class="comment" @click="discuss">民主评议</div>
    </div>
</template>

<script>
    export default {
        name: "index",
      methods:{
        summary(){
          this.$router.push('/summary')
        },
        discuss(){
          this.$router.push('/discuss')
        }
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
  .person,.comment{
    width: 3.95rem;
    height: 1.14rem;
    background: #c50206;
    line-height: 1.14rem;
    text-align: center;
    margin: 0.2rem auto;
    font-size: 0.35rem;
    color: #fff;
  }
  .person{
    margin-top: 4rem;
  }
</style>
