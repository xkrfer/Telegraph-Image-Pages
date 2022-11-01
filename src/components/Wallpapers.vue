<template>
  <div class="background-container">
    <div id="background-slider">
      <figure v-for="(item, index) in wallpapers" :key="item.url" :style="{
        backgroundImage: `url(${item.url})`,
        animationDelay: `${ 6* index}s`
      }">
      </figure>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useWallpapers} from "../hooks/useWallpapers";
const  { wallpapers } = useWallpapers()
</script>

<style lang="less" scoped>
.wallpapers-box{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  margin: 0;
}
.background-container{
  .wallpapers-box;
  background-color: linear-gradient(240deg,rgba(150,50,50,.3),rgba(0,0,200,0));
  z-index: -1;
}
#background-slider{
  height: 100%;
  width: 100%;
  figure{
    .wallpapers-box;
    color: transparent;
    opacity: 0;
    backface-visibility: hidden;
    animation: imageAnimation 30s linear -.5s infinite

  };
}
@-webkit-keyframes imageAnimation {
  0% {
    opacity: 0;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in
  }

  3% {
    opacity: 1;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out
  }

  20% {
    opacity: 1
  }

  28% {
    opacity: 0
  }

  to {
    opacity: 0
  }
}
</style>