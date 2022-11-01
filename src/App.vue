<template>
  <div id="box">
    <wallpapers/>
    <div class="header">
      <a href="https://github.com/xkrfer/Telegraph-Image-Pages" target="_blank"></a>
    </div>
    <div class="main">
      <Upload/>
    </div>
    <div class="footer">
      基于 <a href="https://telegra.ph" target="_blank">Telegraph</a> 的图片上传工具，UI来自 <a href="https://github.com/cf-pages/Telegraph-Image" target="_blank">Telegraph-Image</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import Wallpapers from "./components/Wallpapers.vue"
import Upload from "./components/Upload.vue"
</script>

<style scoped lang="less">
#box{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  padding: 30px;
  background: linear-gradient(240deg,rgba(150,50,50,.3),rgba(0,0,200,0));
  .main{
    flex: 1;
    flex-direction: column;
    padding: 30px 0;
    align-items: center;
    box-sizing: border-box;
  }
  .header{
    display: flex;
    justify-content: end;
    a{
      width: 22px;
      height: 22px;
      background-image: url("/github.svg");
      background-color: transparent;
      background-size: 110%;
      background-repeat: no-repeat;
      background-position: top;
    }
  }
  .footer{
    font-size: 12px;
    color: #fff;
    a{
      color: #fff;
      text-decoration: none;
      font-weight: 700
    }
  }
}
</style>
