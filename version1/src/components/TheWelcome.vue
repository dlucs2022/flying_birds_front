<script setup>
import { ElButton } from 'element-plus';

let submitFile;
submitFile = () => {
  // 你的上传、查询、可视、xxx 操作逻辑
};
</script>

<style scoped>
.background-container {
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/imageHome.png');
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: normal;
  align-items: center;
}

.button-container {
  display: flex;
  flex-direction: row;
  align-items: center; /* 将按钮容器内的元素居中对齐 */
  gap: 5px; /* 设置按钮之间的间距 */
}
</style>

<template>
  <div class="background-container">
    <!-- 背景图片容器 -->
    <div class="button-container">
      <!-- 按钮容器 -->
      <el-button @click="submitFile">上传</el-button>
      <el-button @click="submitFile">查询</el-button>
      <el-button @click="submitFile">可视</el-button>
      <el-button @click="submitFile">XXX</el-button>
    </div>
  </div>
</template>
