<template>
    <div>
      <div v-for="(item,index) in formData" class="contain">
        <div class="main">
          <div class="left">
            <div class="title">{{item.typeName}}</div>
            <div class="time">{{item.timeFormat}}</div>
          </div>
          <div class="score">{{item.singleDesc}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            formData:[]
          }
      },
      methods:{
          getScore(){
            this.$axios.get('/hhdj/integral/integralList.do?page=1&rows=10').then(res=>{
              if(res.code == 1){
                this.formData=res.rows
              }
            })
          }
      },
      created(){
          this.getScore()
      }
    }
</script>

<style scoped lang="scss">
.main{
  display: flex;
  width: 7.5rem;
  height: 1.58rem;
  box-sizing: border-box;
  padding: 0.25rem 0.3rem;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  .left{
    display: flex;
    flex-direction: column;
  }
}
  .title{
    font-size: 0.35rem;
  }
  .time,.score{
    font-size: 0.3rem;
  }
  .score{
    color: #f00;
  }
</style>
