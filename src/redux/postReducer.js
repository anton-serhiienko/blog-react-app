import {PostAPI} from "../api/api";


const SET_POSTS = "SET_POSTS";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";




let initialState={
    posts: [],
    isLoading: false,
    someInfo: "some"
}

const postReducer = (state = initialState, action) =>{


    switch (action){
        case SET_POSTS:
            return {...state, posts: action.posts}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const toggleIsLoading = (isLoading) => ({type:TOGGLE_IS_LOADING, isLoading})

debugger
export const getPosts = () => async(dispatch) => {
    dispatch(toggleIsLoading(true))

        let data = await PostAPI.getPostsList()


    dispatch(toggleIsLoading(false))
    dispatch(setPosts(data))


}

export default postReducer;