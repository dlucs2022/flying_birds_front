<template>
  <div class="background-container">
    <div class="overlay">
      <h1 style="text-align: center;">上传文件</h1>

      <div class="form-container">
        <!-- 下拉选择框 -->
        <el-select v-model="selectedSpecies" placeholder="请选择物种" class="el-select" style="width: 240px; margin-bottom: 20px;">
          <el-option v-for="species in speciesOptions" :key="species.value" :value="species.value" :label="species.label"></el-option>
        </el-select>

        <!-- 添加物种 -->
        <div style="margin-bottom: 10px;">
          <span>添加物种:</span>
        </div>
        <div style="display: flex; margin-bottom: 20px;">
          <el-input v-model="newSpecies" style="flex: 1;" placeholder="请输入物种名称"></el-input>
          <el-button @click="addSpecies">确认添加</el-button>
        </div>

        <!-- 文件上传 -->
        <el-upload action="/your-upload-api-endpoint" :before-upload="handleFileUpload" class="input-file">
          <el-button slot="trigger">选择CSV文件</el-button>
          <span slot="tip" style="margin-left: 8px;">仅可选择100MB以内CSV文件</span>
        </el-upload>

        <!-- 提交按钮 -->
        <el-button @click="submitFile" style="margin-top: 10px;">提交</el-button>
      </div>
    </div>
  </div>
</template>


<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { ElSelect, ElOption, ElUpload, ElButton, ElInput } from 'element-plus';

const fileToUpload = ref([]); // 使用 ref 数组保存文件列表
const selectedSpecies = ref(''); // 保存选中的物种，初始值为空字符串
const speciesOptions = ref([]); // 保存从后端获取的物种选项
const newSpecies = ref(''); // 新添加的物种

const handleFileUpload = (file) => {
  // 在这里处理文件上传前的逻辑，返回 false 可以取消上传
  console.log('File ready to be uploaded:', file);
  return true;
};

const submitFile = () => {
  // 在这里添加提交文件的逻辑
  console.log('Submitting file:', fileToUpload.value);
};

// 处理文件移除的方法
const handleFileRemove = (file) => {
  console.log('File removed:', file);
};

// 处理文件上传成功的方法
const handleFileSuccess = (response, file) => {
  console.log('File uploaded successfully:', file);
};

// 从后端获取物种数据
const fetchSpeciesOptions = async () => {
  try {
    const response = await axios.get('/api/species'); // 假设从 '/api/species' 获取物种数据
    speciesOptions.value = response.data.map(species => ({
      value: species.id,
      label: species.name
    }));
  } catch (error) {
    console.error('Error fetching species:', error);
  }
};

// 组件挂载后获取物种数据
onMounted(() => {
  fetchSpeciesOptions();
});

// 添加物种
const addSpecies = () => {
  if (newSpecies.value) {
    speciesOptions.value.unshift({
      value: newSpecies.value,
      label: newSpecies.value
    });
    selectedSpecies.value = newSpecies.value; // 自动选中新添加的物种
    newSpecies.value = ''; // 清空输入框
  }
};
</script>


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

.species-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-file {
  margin: 10px 0; /* 上下外边距，左右外边距为 0，用于控制元素与其他元素之间的间距 */
}

.el-select {
  width: 240px; /* 下拉选择框宽度 */
  margin-bottom: 20px; /* 底部外边距，用于控制元素与其他元素之间的间距 */
}
</style>
