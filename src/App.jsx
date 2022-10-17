import React from 'react';
import "./App.css"
import Headers from "./components/Header/Headers";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Content from "./components/Content/Content";
import Messages from "./components/Navbar/Messages/Messages";
import News from "./components/Navbar/News/Messages";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Messages";


const App = () => {
    return (
        <BrowserRouter>
            <div className='div1'>
                <Headers/>
                <Navbar/>
                <div className="content_wrapper">
                    <Route path='/content' render={Content}/>
                    <Route path='/dialogs' render={Dialogs}/>
                    <Route path='/messages' render={Messages}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App
