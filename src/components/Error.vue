<template>
  <div class="error">
    <div class="svg-wrapper">
      <div class="svg-box">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="upload-icon">
          <path d="M809.222867 150.531412 868.688213 210.004945 568.397986 510.292102 868.688213 810.587446 809.222867 870.055862 508.93264 569.771775 208.644459 870.055862 149.169903 810.587446 449.461153 510.292102 149.169903 210.004945 208.644459 150.531412 508.93264 450.823686Z" fill="#d81e06"></path>
        </svg>
      </div>
    </div>
    <div class="text-area">
        <span>
          出错啦，请重新上传
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

</style>