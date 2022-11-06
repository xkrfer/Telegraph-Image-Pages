<template>
  <div class="block">
    <div class="content">
      <svg t="1667718022472" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6053" width="200" height="200"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="6054"></path><path d="M512 512m-450.56 0a450.56 450.56 0 1 0 901.12 0 450.56 450.56 0 1 0-901.12 0Z" fill="#D80405" p-id="6055"></path><path d="M245.76 481.28m30.72 0l471.04 0q30.72 0 30.72 30.72l0 0q0 30.72-30.72 30.72l-471.04 0q-30.72 0-30.72-30.72l0 0q0-30.72 30.72-30.72Z" fill="#FFFFFF" p-id="6056"></path></svg>
       <p>图片未通过审核，禁止查看</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(171, 171, 171);
  .content{
    background-color: #fff;
    border-radius: 4px;
    width: 60%;
    min-width: 375px;
    text-align: center;
    padding: 40px 0;
    p{
      color: #000;
      font-size: 14px;
    }
  }
}
</style>