<template>
    <div class="content">
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
            var marker = new BMap.Marker(point1);        // 创建标注
            map.addOverlay(marker);
            var point2 = new BMap.Point(114.02,32.98 );
            var marker = new BMap.Marker(point2);        // 创建标注
            map.addOverlay(marker);
          }
        },
      mounted() {
          this.initMap()
      }
    }
</script>

<style scoped lang="scss">
.content {
  box-sizing: border-box;
  width: 7.5rem;
  height: 100vh;
}
  .con{
    width: 7.5rem;
    height: 100vh;
  }
</style>
