import * as axios from "axios"


const instance = axios.create({
    baseURL: "https://bloggy-api.herokuapp.com/",
    // headers: {
    //     'Content-Type':'application/json'
    // }
});


export const PostAPI = {
    getPostsList(){
        return axios.get(`https://bloggy-api.herokuapp.com/posts`)
            .then(response =>{
                console.log("get Response")
                console.log(response.data)
                return response.data
            })
    },

    getRetrievePost(postId){
        return instance.get(`posts/${postId}?_embed=comments`)
            .then(response => {
                return response.data
            })
    },
    updatePost(postId, title, body){
        return instance.put(`posts/${postId}`, {title, body})
    },

    addPost(title, body){
        return instance.post(`posts`, title, body)
    },

    deletePost(postId){
        return instance.delete(`posts/${postId}`)
    },


    addComment(postId, body){
        return instance.post(`comments` , {postId, body})
    }


}