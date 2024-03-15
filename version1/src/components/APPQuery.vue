
<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from 'vue'    
import dao from '@/api/dao'
const currentPage = ref(1)
const pageSize = ref(30)
const totalData = ref(1000)
const species = ref('')

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
onMounted(() => {
  fetchData()

})
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

</script>

<template>
    <el-input v-model="species" style="width: 240px ;margin-bottom:20px" placeholder="Please input species." size="large"/>
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