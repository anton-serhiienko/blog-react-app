import React, {useEffect, useState} from "react"
import './App.css';
import {connect, useDispatch} from "react-redux";
import {PostAPI} from "./api/api";
import App from "./App";
import {getPosts, setPosts} from "./redux/postReducer";

let AppContainer = (props) =>{
    const dispatch = useDispatch();


    // let [posts, setPosts] = useState([])

    useEffect(()=>{

        props.getPosts()

        // let fetchData  = async() =>{
        //     const request = await PostAPI.getPostsList()
        //     setPosts(request.data)
        //     return request
        // }
        // fetchData()

    }, [])

    return <App posts={props.posts}/>
}


let mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts,
        someInfo: state.postReducer.someInfo,
        isLoading: state.postReducer.isLoading
    }
}


export default connect(mapStateToProps, {getPosts, setPosts})(AppContainer)



