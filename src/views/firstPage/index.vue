<template>
  <div class="first-page">
    <div class="head clearfix">
      <img src="../../img/logo.png" alt="" class="fll">
      <div v-if="!token">
        <router-link to="/login">
          <div class="login flr">登录</div>
        </router-link>
      </div>


    </div>
    <!--轮播图-->
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" >
          <img :src="slide.imgUrl" alt="" @click="getSwiperMe(slide.url)">
          <div class="swiper-title">{{slide.title}}</div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--六宫格-->
    <div class="space">
      <div class="top">
        <div class="left">
          <div>
            <img src="../../img/icon_01.png" alt="" @click="getSpace(0)">
          </div>

          <div class="text">信工新闻眼</div>
        </div>
        <div class="middle">
          <div>
            <img src="../../img/icon_02.png" alt="" @click="enter">
          </div>

          <div class="text">掌上组织生活</div>
        </div>
        <div class="right">
          <div v-if="token">
            <img src="../../img/icon_03.png" alt="" @click="dangD">
          </div>
          <div v-else>
            <router-link to="/login">
              <img src="../../img/icon_03.png" alt="">
            </router-link>
          </div>
          <div class="text">党员互动</div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div>
            <img src="../../img/icon_04.png" alt="" @click="getSpace(3)">
          </div>

          <div class="text">党建一点通</div>
        </div>
        <div class="middle">
          <div>
            <img src="../../img/icon_05.png" alt="" @click="getSpace(5)">
          </div>
          <div class="text">党员亮身份</div>
        </div>
        <div class="right">
          <div>
            <img src="../../img/icon_06.png" alt="" @click="todayD">
          </div>
          <div class="text">党史的今天</div>
        </div>
      </div>
    </div>
    <!--领航-->
    <div class="lh">
      <img src="../../img/banner01@2x.png" alt="">
    </div>
    <!--背景图-->
    <div class="back-img">
      <div class="left-back">
        <div class="img1" @click="getSpace()"></div>
      </div>
      <div class="middle-back">
        <div class="img2" @click="getSpace(6)"></div>
        <div class="img3" @click="getSpace(4)"></div>
      </div>
      <div class="right-back">
        <div class="img4" @click="getSpace()"></div>
        <div class="img5" @click="getSpace(1)"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import router from '../../router/index'
  import {mapState} from 'vuex'
  export default {
    name: "index",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: []
      }
    },
    methods: {
      getSwiper() {
        this.$axios.get('/hhdj/carousel/carouselList.do?type=0').then(res => {
          if (res.code == 1) {
            this.swiperSlides = res.rows
          }
        })
      },
      getSwiperMe(id){
        router.push(`/swipperDetail/${id}`)
      },
      getSpace(type){
        router.push({
          path: `/spaceDetail/${type}`,
        }
         )
      },
      todayD(){
        router.push('/todayD')
      },
      enter(){
        router.push('/zhangLife')
      },
      dangD(){
        router.push('/dangD')
      }
    },
    created() {
      this.getSwiper()
    },
    computed: {
      ...mapState(['token','userInfo'])
    }
  }
</script>

<style scoped lang="scss">
  .first-page {
    overflow:-moz-scrollbars-vertical;
  }

  .head {
    background: #c50206;
    padding: 5px;
    box-sizing: border-box;
    width: 7.5rem;
    height: 0.88rem;
    line-height: 0.88rem;
    img {
      width: 2.6rem;
      height: 0.6254rem;
      line-height: 0.6254rem;
    }
    .login {
      width: 0.8rem;
      height: 0.68rem;
      line-height: 0.68rem;
      color: #fff;
      font-size: 0.34rem;
    }
  }

  .swiper {
    width: 7.5rem;
    height: 3.75rem;
    position: relative;
    img {
      width: 7.5rem;
      height: 3.75rem;
    }
  }

  .swiper-title {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 11;
    padding: 5px;
    box-sizing: border-box;
    color: #fff;
    height: 0.66rem;
    line-height: 0.66rem;
    font-size: 0.4rem;
  }

  .space {
    display: flex;
    flex-direction: column;
    width: 7.5rem;
    height: 3.94rem;
    background: url("../../img/bt_bg.png") no-repeat;
    background-size: 100% 100%;
    padding: 15px 0 5px;
    box-sizing: border-box;

  }

  .top, .bottom {
    display: flex;
    justify-content: space-around;
  }

  .left, .middle, .right {
    display: flex;
    flex-direction: column;
    width: 2.4rem;
    height: 1.96rem;
    text-align: center;
  }

  .space img {
    width: 1rem;
    height: 1rem;
  }

  .space .text {
    text-align: center;
    width: 2.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.3rem;
  }

  .lh {
    font-size: 0;
    img {
      width: 7.5rem;
      height: 1.8018rem;
    }
  }

  .back-img {
    display: flex;
  }

  .middle .right {
    display: flex;
    flex-direction: column;
  }

  .img1 {
    width: 2.5rem;
    height: 3.3rem;
    background-image: url("../../img/tese.png");
    background-position: 0 0;
    background-size: 7.5rem 3.3rem;
  }

  .img2, .img3, .img4, .img5 {
    width: 2.5rem;
    height: 1.65rem;
    background-image: url("../../img/tese.png");
    background-size: 7.5rem 3.3rem;
  }
  .img2{
    background-position: -2.5rem 0;
  }
  .img3{
    background-position: -2.5rem -1.65rem;
  }
  .img4{
    background-position: -5rem 0;
  }
  .img5{
    background-position: -5rem 1.65rem;
  }

</style>
