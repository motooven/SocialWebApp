import React from 'react';

const Post = (props) => {
    return (
        <div>
            {props.text}
            {props.like}
        </div>
    );
};

export default Post;