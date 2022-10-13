import React from 'react'
import s from './Content.module.css'
import Post from "./Mypost/Post/Post";
import Mypost from "./Mypost/Mypost";


const Content = () => {
    return <div className={s.content}>
        <img src="https://st3.depositphotos.com/1679906/17352/v/1600/depositphotos_173522714-stock-illustration-skull-in-gas-mask-illustration.jpg" alt="img" />
        <div>
            <div>ava + description</div>
            <Mypost/>
        </div>
    </div>
}


export default Content