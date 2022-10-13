import React from 'react';
import "./App.css"
import Headers from "./components/Header/Headers";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='div1'>
            <Headers/>
            <Navbar/>
            <div className="content_wrapper">
                <Dialogs/>
                {/*<Content/>*/}
            </div>

        </div>
    )
}

export default App
