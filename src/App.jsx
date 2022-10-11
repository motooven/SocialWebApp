import React from 'react';
import "./App.css"
import Headers from "./components/Header/Headers";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";


const App = () => {
    return (
        <div className='div1'>
            <Headers/>
            <Navbar/>
            <Content/>
        </div>
    )
}

export default App
