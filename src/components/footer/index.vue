<template>
  <div class="footer">
    <div class="footer-left" @click="$router.push('/layout/firstPage')">
      <div :class="{active:$route.name === 'one'}" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <div class="title">首页</div>
      </div>

    </div>
    <div class="footer-middle" @click="$router.push('/layout/notification')">
      <div :class="{active:$route.name === 'two'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liaotian"></use>
        </svg>
        <div class="title">通知早知道</div>
      </div>
    </div>
    <div class="footer-right" @click="$router.push('/layout/myMessage')">
      <div :class="{active:$route.name === 'three'}">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-touxiang"></use>
        </svg>
        <div class="title">我的党建</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .footer {
    display: flex;
    width: 100%;
    height: 0.98rem;
    background: #fff;
    padding-top:0.06rem;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 98;
  }
a{
  text-decoration: none;
  color: #333;
}
  .footer-left, .footer-middle, .footer-right {
    width: 2.5rem;
    height: 0.92rem;
    font-size: 0;
    text-align: center;
    .title{
      font-size: 0.2rem;
    }
    .icon{
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  .active {
  color: #f00;
  border-top: 2px solid #f00;
}

</style>
