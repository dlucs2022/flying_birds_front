<script setup>
import { ref } from 'vue';
import { ElSelect, ElOption, ElUpload, ElButton } from 'element-plus';

const fileToUpload = ref(null);
const value = ref(null);

const handleFileUpload = (file) => {
  // 在这里处理文件上传前的逻辑，返回 false 可以取消上传
  console.log('File ready to be uploaded:', file);
  return true;
};

const submitFile = () => {
  // 在这里添加提交文件的逻辑
  console.log('Submitting file:', fileToUpload.value);
};
</script>

<template>
  <div class="background-container">
    <div class="overlay">
      <h1>上传文件</h1>

      <div class="form-container">
        <!-- 使用 ElSelect 替换原生 select -->
        <el-select v-model="value" placeholder="请选择" class="el-select">
          <!-- 使用 ElOption 替换原生 option -->
          <el-option label="选项1" value="option1"></el-option>
          <el-option label="选项2" value="option2"></el-option>
          <el-option label="鸟" value="bird"></el-option>
          <el-option label="羊" value="sheep"></el-option>
        </el-select>

        <!-- 使用 Element Plus 中的 ElUpload 组件 -->
        <el-upload
            action="/your-upload-api-endpoint"
            :before-upload="handleFileUpload"
            class="input-file"
        ></el-upload>

        <!-- 使用 Element Plus 中的 ElButton 组件 -->
        <el-button @click="submitFile">提交</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-container {
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/imageHome.png');
  background-size: cover; /* 背景图片等比例缩放，保持宽高不变，覆盖整个容器 */
  background-attachment: fixed; /* 固定背景图片，当页面滚动时，背景不会滚动 */
  width: 100vw; /* 宽度占据整个视口宽度 */
  height: 100vh; /* 高度占据整个视口高度 */
  justify-content: normal; /* 用于控制项目在主轴上的对齐方式，默认值是 flex-start */
  align-items: center; /* 用于控制项目在交叉轴上的对齐方式，默认值是 stretch */
}

.overlay {
  /* 半透明背景层样式 */
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色背景 */
  padding: 20px; /* 内边距，增加内容与边框之间的空间 */
  border-radius: 10px; /* 边框圆角半径 */
}

.form-container {
  display: flex; /* 使用 Flex 布局 */
  flex-direction: column; /* 主轴方向为纵向排列 */
  align-items: normal; /* 项目在交叉轴上居中对齐 */
}

.input-file {
  margin: 10px 0; /* 上下外边距，左右外边距为 0，用于控制元素与其他元素之间的间距 */
}

.el-select {
  width: 240px; /* 下拉选择框宽度 */
  margin-bottom: 20px; /* 底部外边距，用于控制元素与其他元素之间的间距 */
}
</style>
