<template>
  <div class="today">
    <div class="message">
      <div @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyiye"></use>
        </svg>
      </div>
      <div class="title">党史上的今天</div>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import getUrl from '../../util/geturl'
  import cheerio from 'cheerio'

  export default {
    name: "index",
    data() {
      return {
        content: ''
      }
    },
    methods: {
      getToday(url) {
        this.$axios.get(`/hhdj/proxy/proxy.do?url=${url}`).then(res => {
          const $ = cheerio.load(res);
          let content = $(".p1_02").html()
          this.content = content
        })
      }
    },
    created() {
      let data = new Date()
      let month = data.getMonth() + 1
      month = month > 9 ? '' + month : '0' + month
      let day = data.getDate()
      day = day > 9 ? '' + day : '0' + day
      let url = getUrl(month, day)
      this.getToday(url)
    }
  }
</script>

<style scoped lang="scss">
  .message {
    width: 7.5rem;
    background: #c50206;
    .title {
      text-align: center;
      color: #fff;
      height: 0.86rem;
      line-height: 0.86rem;
      width: 7.1rem;
      margin: 0 auto;
      font-size: 0.34rem;
    }
    .icon {
      width: 0.9rem;
      height: 0.9rem;
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .content {
    padding: 0.1rem 0.2rem;
    width: 7.5rem;
    height: 100%;
    font-size: 0;
    box-sizing: border-box;
  }
</style>
