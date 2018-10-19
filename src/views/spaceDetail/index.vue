<template>
  <div>
    <div class="message">
      <div @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyiye"></use>
        </svg>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="spaceDetail" v-for="(item,index) in formData">
      <div class="left">
        <img :src="item.pic" alt="">
      </div>
      <div class="right">
        <div class="title">{{item.title}}</div>
        <div class="bottom">
          <div class="time">{{item.currentTime}}</div>
          <div class="num">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yanjing"></use>
            </svg>
            <div class="numLook">{{item.count}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            formData:[],
            title:''
          }
      },
      methods:{
          getTitle(type){
            let title='';
            switch (type) {
              case "0" :
                title = '信工新闻眼'
                break
              case "1" :
                title = '特色活动'
                break
              case "3" :
                title = '党建一点通'
                break
              case "4" :
                title = '制度建设'
                break
              case "5" :
                title = '党员亮身份'
                break
              case "6" :
                title = '随时随地学'
                break
              case "7" :
                title = '通知早知道'
                break
              case "8" :
                title = '政治学习'
                break
              default:
                break
            }
            this.title=title
          },
        getSpaceDetail(type){
          this.$axios.get(`/hhdj/news/newsList.do?page=1&rows=10&type=${type}`).then(res=>{
            if (res.code == 1){
              this.formData=res.rows
            }
          })
        }
      },
      created(){
          let type=this.$route.params.id
          this.getSpaceDetail(type)
          this.getTitle(type)

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
  .spaceDetail{
    display: flex;
    padding: 0.2rem;
    border-bottom: 0.02rem solid #ccc;
  }
  .left{
    width: 1.6rem;
    height: 1.6rem;
  }
.right{
  width: 5.3rem;
  height: 1.6rem;
  display: flex;
  flex-direction: column;
  .title{
    width: 5.3rem;
    height: 0.96rem;
    font-size: 0.3rem;
  }
  .bottom{
    width: 5.3rem;
    height: 0.36rem;
    display: flex;
    justify-content: space-between;
    .time{
      height: 0.36rem;
      font-size: 0.05rem;
    }
    .num{
      width: 0.8968rem;
      height: 0.36rem;
      display: flex;

      .numLook{
        font-size: 0.2rem;
      }
      #icon-yanjing{
        height: 0.36rem;
        width: 0.3rem;
        color: #333;
      }
    }
  }
}

</style>
