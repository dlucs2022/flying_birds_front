
<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from 'vue'    
import dao from '@/api/dao'
const currentPage = ref(1)
const pageSize = ref(30)
const totalData = ref(1000)
const species = ref('')
const select_species = ref('')
const sepcies_list = ref([])

let tableData = ref([])
async function fetchData() {
  await dao.getQueryData(species.value,currentPage.value,pageSize.value).then((res) => {
      if (res.code === 0) {
        tableData.value = res.data.data 
        totalData.value = res.data.total
        
      }
  }).catch((err) => {
    console.log(err)
  })
}
async function getSpeciesList() {
  await dao.getSpeciesList().then((res) => {
    if (res.code === 0) {
      sepcies_list.value = res.data.data
    }
  }).catch((err) => {
    console.log(err)
  })
}
function selectSpecies(val: string) {
  species.value = val
  fetchData()

}
onMounted(() => {
  // fetchData()
  getSpeciesList()

})
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

</script>

<template>
  <el-select
      v-model="select_species"
      placeholder="Select species"
      size="large"
      style="width: 240px;margin-bottom:20px"
      @change="species = select_species"
    >
      <el-option
        v-for="item in sepcies_list"
        :key="item.value"
        :label="item.value"
        :value="item.value"
      />
    </el-select>
    
    <el-table :data="tableData" style="width: 100%" height="250">
      <el-table-column fixed prop="species_id" label="species_id" width="150" />
      <el-table-column prop="device_name" label="device_name" width="120" />
      <el-table-column prop="time" label="time" width="120" />
      <el-table-column prop="speed" label="speed" width="120" />
      <el-table-column prop="satellites" label="satellites" width="120" />
      <el-table-column prop="altitude" label="altitude" width="120" />
      <el-table-column prop="longitude" label="longitude" width="120" />
      <el-table-column prop="latitude" label="latitude" width="120" />
      <el-table-column prop="create_time" label="create_time" width="120" />
      <el-table-column prop="update_time" label="update_time" width="120" />
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[30,50,80,100,200,300,400,500]"
        :small = "false"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalData"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

</template>

<style scoped>
  .demo-pagination-block{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>