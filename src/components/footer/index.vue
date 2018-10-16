<template>
    <div class="footer">
      <router-link class="footer-left" to="/firstPage">
        <div class="iconfont icon-danghui"></div>
        <div class="footer-left-title">首页</div>
      </router-link>
      <router-link class="footer-middle" to="/notification">
        <div class="iconfont icon-liaotian"></div>
        <div class="footer-middle-title">通知早知道</div>
      </router-link>
      <router-link class="footer-right" to="/MyMessage">
        <div class="iconfont icon-icontouxiang"></div>
        <div class="footer-right-title">我的党建</div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
.footer{
  display: flex;
  width: 100%;
  height: 0.92rem;
  background: #fff;
}
  .footer-left,.footer-middle,.footer-right{
    width: 2.5rem;
    height: 0.92rem;
  }

</style>
