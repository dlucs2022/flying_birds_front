<template>
  <div class="background-container">
    <div id="species-form">
      <label for="species-input">物种：</label>
      <select v-model="selectedSpecies" @change="updateIndividualOptions">
        <option v-for="species in speciesOptions" :value="species.value" :key="species.value">
          {{ species.label }}
        </option>
      </select>

      <label for="individual-input">个体：</label>
      <select v-model="selectedIndividual" :disabled="!individualOptions.length">
        <option v-for="individual in individualOptions" :value="individual.value" :key="individual.value">
          {{ individual.label }}
        </option>
      </select>
    </div>

    <table>
      <thead>
      <tr>
        <th>日期</th>
        <th>物种</th>
        <th>个体</th>
        <th>地区</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>2024年3月10日</td>
        <td>{{ selectedSpecies }}</td>
        <td>{{ selectedIndividual }}</td>
        <td>剑湖</td>
      </tr>
      <!-- 这里可以通过 v-for 动态生成更多的行 -->
      </tbody>
    </table>
  </div>
</template>

<!-- 其他部分保持不变 -->


<script>
export default {
  data() {
    return {
      selectedSpecies: '',
      selectedIndividual: '',
      speciesOptions: [
        { value: '赤麻鸭雄', label: '赤麻鸭雄' },
        { value: '赤麻鸭雌', label: '赤麻鸭雌' },
        { value: '赤麻鸭幼', label: '赤麻鸭幼' },
      ],
      individualOptions: [],
    };
  },
  methods: {
    updateIndividualOptions() {
      let individuals = [];
      switch (this.selectedSpecies) {
        case '赤麻鸭雄':
          individuals = [
            { value: '赤麻鸭1号', label: '赤麻鸭1号' },
            { value: '赤麻鸭3号', label: '赤麻鸭3号' },
            { value: '赤麻鸭5号', label: '赤麻鸭5号' },
          ];
          break;
        case '赤麻鸭雌':
          individuals = [
            { value: '赤麻鸭2号', label: '赤麻鸭2号' },
            { value: '赤麻鸭4号', label: '赤麻鸭4号' },
          ];
          break;
        case '赤麻鸭幼':
          individuals = [
            { value: '赤麻鸭5号', label: '赤麻鸭5号' },
          ];
          break;
        default:
          individuals = [];
      }
      this.individualOptions = individuals;
      if (this.individualOptions.length) {
        this.selectedIndividual = this.individualOptions[0].value; // 默认选中第一个个体
      } else {
        this.selectedIndividual = ''; // 如果没有可选个体，则清空选中值
      }
    }
  },
  mounted() {
    this.updateIndividualOptions(); // 在组件挂载后初始化 individualOptions
  }
};
</script>

<style scoped>
#species-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

label {
  margin-right: 10px;
}

select {
  margin-left: 10px;
}

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

table {
  width: 50%; /* 设置为原来的一半 */
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2; /* 表头背景色 */
  color: black; /* 文字颜色 */
}

</style>
