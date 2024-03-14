<script setup >
import { ref } from 'vue'
import dao from '@/api/dao'
    
    const file = ref()
    const speciesName = ref('')
    const headers = {
        'Content-Type': 'multipart/form-data'
    }

    
    const changeFile = (uploadFile) => {
        file.value = uploadFile;
    }

    // 确定上传
    const uploadBtn = async () => {
       let param = new FormData()
       // 如果是多个文件数组就循环添加一下就ok了
       param.append("file", file.value.raw)
       param.append("speciesName", speciesName.value)
       // 发个后端
       const res = await dao.uploadFile(param).then((res) => {
         return res
       })
    //    if (res.code === 200) {
    //      ElMessage({
    //        message: '上传成功',
    //        type: 'success'
    //      })
    //    } else {
    //      ElMessage({
    //        message: '上传失败',
    //        type: 'error'
    //      })
    //    }
    }


</script>
<template>
    <div class="upload_container">
        <el-input v-model="speciesName" style="width: 240px ;margin-bottom:20px" placeholder="Please input species." size="large"/>
        <el-upload
            class="upload-demo"
            drag
            action="#"
            :auto-upload="false"
            :headers="headers"
            :limit="1"
            :on-change="changeFile"
        >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
            <div class="el-upload__tip">
                csv files with a size less than 1GB.
                <el-button type="primary" @click="uploadBtn" style="float:right;margin-right:20px">确定上传</el-button>
            </div>
            </template>
        </el-upload>
    </div>
</template>