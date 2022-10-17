import React from 'react'
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>
                <div>Oleg</div>
                <div>Kaban</div>
                <div>Vana</div>
                <div>Jeka</div>
                <div>Viktor</div>
                <div>Mihka</div>
            </div>
            <div>
                <div>Люблю играть в КС</div>
                <div>Тоже играет в КС</div>
                <div>Работает программистом</div>
            </div>
        </div>
    )
}

export default Dialogs