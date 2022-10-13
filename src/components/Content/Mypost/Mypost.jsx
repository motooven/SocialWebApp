import React from 'react';
import Post from "./Post/Post";

const Mypost = (props) => {
    return (
        <div>
            <br/>
                <div>My post</div>
                <div><input/></div>
                <div><button>Add post</button></div>
            <br/>
                <Post text="post 1 " like="like 5"/>
                <Post text="post 2 " like="like 8"/>
        </div>
    );
};

export default Mypost;