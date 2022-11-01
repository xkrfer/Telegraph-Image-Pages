<template>
  <div class="uploading">
    <div class="svg-wrapper">
      <div class="svg-box">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="upload-icon">
          <path d="M554.666667 268.8v601.6h-85.333334V268.8L337.066667 401.066667 277.333333 341.333333 512 106.666667 746.666667 341.333333l-59.733334 59.733334L554.666667 268.8z" fill="#0075ff"></path>
        </svg>
      </div>
    </div>
    <div class="text-area">
        <span>
          正在上传，请稍等…
        </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.svg-wrapper{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  border: 4px solid #c7cfd7;
  margin: 0 auto;
  &:before{
    content: " ";
    position: absolute;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: 50%;
    left: -2px;
    top: -2px;
    animation: bo-data 1.5s linear infinite;
  }
  .svg-box{
    position: absolute;
    width: 60px;
    height: 60px;
    padding: 10px;
    overflow: hidden;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .upload-icon{
      width: 100%;
      height: 100%;
    }
  }
}
.text-area{
  padding: 50px 0 10px;
  font-size: 12px;
  text-align: center;
  span{
    color: #5e6878!important;
  }
}
@keyframes bo-data {
  0% {
    transform: scale(1);
    border: 1px solid #c7cfd7
  }

  to {
    transform: scale(1.5);
    border: 1px solid rgba(199,207,215,.1)
  }
}
.uploading{
  svg.upload-icon{
    animation: up-data 1s linear infinite;
  }
}

@keyframes up-data {
  0% {
    transform: translateY(100%)
  }

  to {
    transform: translateY(-100%)
  }
}

</style>