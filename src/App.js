import React from "react"
import './App.css';
import Posts from "./components/Posts";


let App = (props) => {
    return <>
        <div className="App">
            {props.someInfo}
            {props.posts.map(p=><Posts id={p.id} title={p.title} body={p.body}/>)}
        </div>
    </>


}

export default App




