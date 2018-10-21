<template>
    <div>
      <div class="message">
        <div @click="$router.go(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyiye"></use>
          </svg>
        </div>
        <div class="title">民主评议</div>
      </div>
      <div class="main">
        <div class="know">评议须知</div>
        <div v-html="message" class="content"></div>
        <div class="last">
          <select class="select" v-model="option">
            <option value="">请选择</option>
            <option :value="item.id" v-for="(item,index) in options">{{item.branch}}</option>
          </select>
          <div class="next" @click="enter">下一步</div>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          message:'',
          options:[],
          option: ''
        }
      },
      methods:{
        getDate(){
          this.$axios.get('/hhdj/nationComment/getComment.do').then(res=>{
            this.message=res.content
          })
        },
        getRows(){
          this.$axios.get('/hhdj/branch/findAll.do').then(res=>{
            this.options=res.rows
          })
        },
        enter(){
          this.$router.push(`/detail/${this.option}`)
        }
      },
      created(){
        this.getDate();
        this.getRows()


      }

    }
</script>

<style scoped lang="scss">
  .main{
    padding: 0.2rem;
    .know{
      text-align: center;
      margin: 0.3rem auto;
      font-size: 0.4rem;
    }
    .content{
      font-weight: lighter;
    }
  }
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
  .last{
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    .select{
      box-sizing: border-box;
      padding-left: 0.2rem;
      overflow: hidden;
      width: 3rem;
      height: 0.8rem;
      line-height:0.8rem;
      background: #c50206;
      color:#fff;
      outline: none;
      border-radius: 0.1rem;
    }
    .next{
      font-size: 0.3rem;
      width: 1.5rem;
      height: 0.8rem;
      line-height:0.8rem;
      text-align: center;
      background: #c50206;
      color:#fff;
      margin-left: 0.4rem;
      border-radius: 0.1rem;
    }
  }
</style>
