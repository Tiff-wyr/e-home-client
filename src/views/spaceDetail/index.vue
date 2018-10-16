<template>
  <div>
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
            formData:[]
          }
      },
      methods:{
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
          console.log(type)
          this.getSpaceDetail(type)

      }
    }
</script>

<style scoped lang="scss">
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
