import React from 'react';
import s from './counter.module.css'
type PropsType = {
    value: number
}
const Counter = (props:PropsType) => {
    return (
        <div className={props.value<5?s.classicText:s.redText}>
            {props.value}
        </div>
    );
};

export default Counter;