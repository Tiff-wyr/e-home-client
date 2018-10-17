<template>
    <div>
      <div class="zf">请选择支付方式</div>
      <div class="top" @click="wx(0)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <div class="text">微信</div>
        <img src="../../img/right.png" alt="" class="arrow">
      </div>
      <div class="bottom" @click="wx(1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-umidd17"></use>
        </svg>
        <div class="text">支付宝</div>
        <img src="../../img/right.png" alt="" class="arrow">
      </div>
      <div v-show="isShowing" class="show">
        <div class="mask" @click="mask()"></div>
        <img src="../../img/weixin.png" alt="">
      </div>
      <div v-show="isShow" class="show">
        <div class="mask"  @click="mask()"></div>
        <img src="../../img/zfb.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            isShowing:false,
            isShow:false
          }
      },
      methods:{
        wx(type){
          if(type == 0){
            this.isShowing=true
          }else{
            this.isShow=true
          }
        },
        mask(){
          this.isShowing=false
          this.isShow=false
        }

      }
    }
</script>

<style scoped lang="scss">
.top,.bottom{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7.5rem;
  height: 1.24rem;
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  font-size: 0;

}
.zf{
  width: 7.5rem;
  height:1.24rem;
  padding: 0.4rem 0.1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  font-size: 0.3rem;
}
  .text{
    font-size: 0.3rem;
    width:1rem;
    height: 0.35rem;
  }
  .arrow{
    width: 0.3rem;
    height: 0.3rem;
  }
  .icon{
    width: 0.9rem;
    height: 0.9rem;
  }
#icon-weixin{
  width:  0.9rem;
  height: 0.9rem;
}
#icon-umidd17{
  width: 0.9rem;
  height:  0.9rem;
}
  .mask{
   position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 2;
  }
  .show{
    img{
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 5rem;
      z-index: 998;
    }
  }

</style>
