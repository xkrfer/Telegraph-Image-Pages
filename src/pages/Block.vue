<template>
  <div class="block">
    <div class="content">
      <el-empty
          image="/block.svg"
          description="图片未通过审核，禁止查看"
          :image-size="200"
      />
    </div>
  </div>
</template>

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
    :deep(.el-empty__description){
      p{
        color: #000;
      }
    }
  }
}
</style>