import React from 'react';
import s from './button.module.css'

type PropsType = {
    name:string
    callBack: ()=>void
    disabled: boolean
}
const Button = (props:PropsType) => {
    const callBack = () => {
        props.callBack()
    }
    return (
        <div>
            <button className={s.button} onClick={callBack} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

export default Button;