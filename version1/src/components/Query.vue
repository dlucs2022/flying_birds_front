<template>
  <div class="background-container">
    <div id="species-form">
      <el-form label-width="80px">
<!--        <el-form-item label="物种" style="color: yellow;">-->
        <span>选择物种:</span>
        <br>
        <el-select v-model="selectedSpecies" @change="updateIndividualOptions" placeholder="请选择">
            <el-option
                v-for="species in speciesOptions"
                :key="species.value"
                :value="species.value"
                :label="species.label"
            ></el-option>
          </el-select>
        <br>
        <span>选择个体:</span>
        <br>
<!--        </el-form-item>-->
<!--        <el-form-item label="个体" style="color: white;">-->
          <el-select v-model="selectedIndividual" :disabled="!individualOptions.length" placeholder="请选择">
            <el-option
                v-for="individual in individualOptions"
                :key="individual.value"
                :value="individual.value"
                :label="individual.label"
            ></el-option>
          </el-select>
<!--        </el-form-item>-->
      </el-form>
    </div>

    <el-table :data="tableData" style="width: 50%; margin-top: 20px;">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="species" label="物种"></el-table-column>
      <el-table-column prop="individual" label="个体"></el-table-column>
      <el-table-column prop="region" label="地区"></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ElForm, ElTableColumn, ElFormItem, ElSelect, ElOption, ElTable } from "element-plus";

const selectedSpecies = ref('');
const selectedIndividual = ref('');
const speciesOptions = ref([]); // 从后端获取的物种数据
const individualOptions = ref([]); // 从后端获取的个体数据
const tableData = ref([
  { date: '2024年3月10日', species: '', individual: '', region: '剑湖' }
]);

// 模拟从后端获取物种和个体数据的方法
const fetchDataFromBackend = () => {
  // 假设从后端获取的数据
  const speciesData = [
    { value: '赤麻鸭', label: '赤麻鸭' },
    { value: '松鸦', label: '松鸦' }
  ];
  const individualData = [
    { species: '赤麻鸭', value: '赤麻鸭雄性1号', label: '赤麻鸭雄性1号' },
    { species: '赤麻鸭', value: '赤麻鸭雄性2号', label: '赤麻鸭雄性2号' },
    { species: '松鸦', value: '松鸦雄性1号', label: '松鸦雄性1号' },
    { species: '松鸦', value: '松鸦雌性2号', label: '松鸦雌性2号' }
  ];
  speciesOptions.value = speciesData;
  individualOptions.value = individualData.filter(item => item.species === selectedSpecies.value);
};

const updateIndividualOptions = () => {
  fetchDataFromBackend();
};

onMounted(() => {
  fetchDataFromBackend(); // 初始化时从后端获取数据
});
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

.el-form-item__label {
  color: white;
}

.el-select {
  width: 200px;
  color: white;
}
</style>
