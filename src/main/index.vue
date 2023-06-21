<template>
  <div class="common-layout">
    <el-row style="height: 100%;">
      <el-col :span="3">
        <div>
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
          <el-menu-item index="2">
            <svg t="1687243524934" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1795" width="200" height="200"><path d="M896 896H96a32 32 0 0 1-32-32V224a32 32 0 0 1 64 0v608h768a32 32 0 1 1 0 64z" p-id="1796"></path><path d="M247.008 640a32 32 0 0 1-20.992-56.192l200.992-174.24a32 32 0 0 1 42.272 0.288l172.128 153.44 229.088-246.304a32 32 0 0 1 46.88 43.616l-250.432 269.216a31.936 31.936 0 0 1-44.704 2.08l-174.56-155.52-179.744 155.84a31.872 31.872 0 0 1-20.928 7.776z" p-id="1797"></path></svg>
            <span>Navigator Two</span>
          </el-menu-item>
          </el-menu>
        </div>
      </el-col>
        <el-col :span="10">
            <div class="grid-content upContent"></div>
            <div class="grid-content downContent"></div>
        </el-col>
        <el-col :span="11">
            <div class="right-content"></div>
        </el-col>
    </el-row>
  </div>
</template>

<script setup>

</script>

<style scoped>
.common-layout{
    height: 100%;
}
.grid-content {
  border-radius: 4px;
  background-color: rgb(216, 216, 244);
  height: 50%;
}
.right-content{
  border-radius: 4px;
  background-color: bisque;
  height: 100%;   
}
.downContent{
    background-color: rgb(220, 168, 168);
}
.svg{
    height: 10px;
    width: 10px;
}
</style>
