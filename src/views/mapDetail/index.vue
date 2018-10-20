<template>
    <div class="content">
      <div class="message">
        <div @click="$router.go(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyiye"></use>
          </svg>
        </div>
        <div class="title">流动党员找组织</div>
      </div>
      <div id="container" class="con">
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
          initMap() {
            const BMap = window.BMap
            var map = new BMap.Map("container");
            var point1 = new BMap.Point(116.46,39.92 );
            map.centerAndZoom(point1, 7);
            map.enableScrollWheelZoom(true);
            map.addControl(new BMap.NavigationControl());

            //起点标注北京
            var marker1 = new BMap.Marker(point1);        // 创建标注
            map.addOverlay(marker1);
             var labelOne=new BMap.Label("我在北京",{
               offset:new BMap.Size(20,-10)
             })
            marker1.setLabel(labelOne)

            var point2 = new BMap.Point(114.02,32.98 );
            var marker2 = new BMap.Marker(point2,{
              icon: new BMap.Icon('/static/img/start_point.png',new BMap.Size(50,50),{
                imageSize: new BMap.Size(30,30)
              })
            });
            var labelTwo=new BMap.Label("我在驻马店",{
              offset:new BMap.Size(-10,-30),
              position: point2
            })
            var labelthree=new BMap.Label("我在驻马店1231213",{
              offset:new BMap.Size(-10,-50),
              position: point2
            })
            map.addOverlay(labelTwo)
            map.addOverlay(labelthree)
            map.addOverlay(marker2);
          }
        },
      mounted() {
          this.initMap()
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
.content {
  box-sizing: border-box;
  width: 7.5rem;
  height: 100vh;
}
  .con{
    width: 7.5rem;
    height: 12.48rem;
  }
</style>
