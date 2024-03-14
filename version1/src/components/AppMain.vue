<script setup>
import AppHome from "./AppHome.vue";

</script>

<template>
        <div class="content">
            <el-main >
                <!-- <AppHome></AppHome> -->

                <router-view>
                    
                </router-view>
                <!-- 设置路由出口 -->
            </el-main>
        </div>
</template>


<style scoped>
  /* 设置主页 */
    .content{
        flex:1;
        background-color: rgb(232, 232, 232);
        padding: 0;
        margin: 0 auto;
        height: 70vh;
        width: 70vw;

    }
</style>