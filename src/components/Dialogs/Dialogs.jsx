import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    const DialogItems = (props) => {
        return  <div><NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink></div>
    }

    const MessageItems = (props) => {
        return <div>{props.message}</div>
    }

    return (
        <div className={s.dialogs}>
            <div>
                <DialogItems name="Oleg" id="1" />
                <DialogItems name="Kaban" id="2" />
                <DialogItems name="Ivan" id="3" />
            </div>
            <div>
                <MessageItems message="Люблю играть в КС" />
                <MessageItems message="Тоже играет в КС" />
                <MessageItems message="Работает программистом" />
            </div>
        </div>
    )
}

export default Dialogs