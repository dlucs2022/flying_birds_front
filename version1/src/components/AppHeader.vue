<template>
    <div class="header_container">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :router = "true"
            style="font-weight: bold;font-size: 50px;"
        >
            <el-menu-item index="/home">Home</el-menu-item>
            <!-- <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
            </el-sub-menu> -->
            <el-menu-item index="/upload" >Upload</el-menu-item>
            <el-menu-item index="4">Todo</el-menu-item>
            <el-menu-item index="4">Todo</el-menu-item>
            <el-menu-item index="4">Todo</el-menu-item>
        </el-menu>
        <div class="h-6" />
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const activeIndex = ref('1')

    const handleSelect = (key, keyPath) => {
        console.log(key, keyPath)
    }
</script>
<style scoped>
    .header_container {
        height: 300px;
        width: 100vw;
        /* max-width:100vw; */
        background-image: url('@/assets/imgs/imageHome.png');
        background-size: 100vw 300px;
    }
    .el-menu-demo{
        width: 50vw;
        margin: 10px auto 0px auto;
        
    }
</style>