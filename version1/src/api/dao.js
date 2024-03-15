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
    async getQueryData(species,currentPage,pageSize){
        return request({
            url: '/flyingbirds/parser/data',
            method: 'post',
            data: {
                "species":species,
                "currentPage":currentPage,
                "pageSize":pageSize,
            }
        })
    }

}

