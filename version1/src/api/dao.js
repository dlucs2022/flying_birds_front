import request from "./request";
export default {

    async uploadFile(data) {
        return request({
            url: '/flyingbirds/upload',
            method: 'post',
            data,
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },

}