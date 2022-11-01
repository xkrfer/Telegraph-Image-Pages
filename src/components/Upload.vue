<template>
  <div class="upload">
    <div class="title">Telegraph-Image-Pages</div>
    <div class="upload-main">
        <Waiting v-show="status === 0" @change="onChange"/>
        <Uploading v-show="status === 1"/>
        <Done v-show="status === 2" :file="file" @back="reUpload"/>
        <Error v-show="status === 3"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Waiting from "./Waiting.vue"
import Uploading from "./Uploading.vue"
import Done from "./Done.vue"
import Error from "./Error.vue"
import {ref} from "vue";
import {STATUS} from "./constant"

const status = ref<STATUS>(STATUS.DONE)
const file = ref<string>()

const onChange = (state: STATUS, files:any) => {
  status.value = state
  if(state === STATUS.ERROR){
    setTimeout(() => {
      status.value = STATUS.WAITING
    },3000)
    return
  }
  if(state === STATUS.DONE){
    file.value = files[0].src
  }
}

const reUpload = () => {
  status.value = STATUS.WAITING
}



</script>

<style lang="less" scoped>
.upload{
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  .title{
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
    padding: 30px 0 10px;
  }
  .upload-main{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 314px;
    height: 370px;
    border-radius: 4px;
    background-image: url("/bg.svg");
    background-color: #fff;
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: top;
    box-shadow: 0 0 32px 0 rgb(12 12 13 / 10%), 0 2px 16px 0 rgb(12 12 13 / 5%);
    color: #5e6878;
  }
}
</style>