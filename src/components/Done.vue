<template>
  <div class="done">
    <div class="svg-wrapper">
      <div class="svg-box">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="upload-icon" >
          <path d="M392.533333 806.4L85.333333 503.466667l59.733334-59.733334 247.466666 247.466667L866.133333 213.333333l59.733334 59.733334L392.533333 806.4z" fill="#0075ff"></path>
        </svg>
      </div>
    </div>
    <div class="text-area">
        <span>
          复制下面的图片地址 或者 取消重新上传
        </span>
    </div>
    <div class="url-box" v-if="file">
        <div class="url-text">
          <el-input v-model="url" readonly/>
          <el-button type="primary" :icon="CopyDocument" class="copy-btn" @click="copyText(url)"/>
        </div>
        <div class="url-text">
        <el-input v-model="markdownUrl" readonly/>
        <el-button type="primary" :icon="CopyDocument" class="copy-btn" @click="copyText(markdownUrl)"/>
      </div>
    </div>
    <div class="re-upload">
      <svg height="26" viewBox="0 0 1024 1024" width="26" xmlns="http://www.w3.org/2000/svg" @click="goBack">
        <path d="M396.8 200.533333l64 64L384 341.333333h298.666667c119.466667 0 213.333333 93.866667 213.333333 213.333334s-93.866667 213.333333-213.333333 213.333333H298.666667v-85.333333h384c72.533333 0 128-55.466667 128-128s-55.466667-128-128-128H170.666667l226.133333-226.133334z" fill="#d73a49" p-id="7650" ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CopyDocument } from "@element-plus/icons-vue"
import copy from 'copy-to-clipboard';
import { ElMessage } from "element-plus";
const props = defineProps({
  file: {
    type: String,
    default: ''
  }
})

const url = computed(() => {
  return `${window.location.origin}${props.file}`
})

const markdownUrl = computed(() => {
  return `![img](${url.value})`
})



const copyText = (text:string) => {
  copy(text)
  ElMessage({
    message: '复制图片地址成功！',
    type: 'success',
  })
}

const emit = defineEmits(["back"])

const goBack = () => {
  emit("back")
}

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
  padding: 30px 0 0;
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
.done{
  .url-box{
    width: 80%;
    .url-text{
      display: flex;
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
      .copy-btn{
        margin-left: 5px;
      }
    }
    margin: 15px auto 0 auto;
  }
}
.re-upload{
  text-align: center;
  margin-top: 15px;
  svg{
    cursor: pointer;
  }
}

</style>