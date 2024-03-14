import request from "./request";
export default {

    async uploadFile(data) {
        return request({
            url: '/upload_csv',
            method: 'post',
            data,
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },

}