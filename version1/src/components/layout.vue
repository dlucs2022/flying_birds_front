<script setup>
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue'

</script>
<template>
    
  <div >
    <el-container class="common-layout">
        
          <AppHeader></AppHeader>
          <AppMain></AppMain>

      
    </el-container>
    
  </div>
</template>
<style scoped>
  .common-layout{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
  }
  
</style>