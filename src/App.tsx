import React, {useState} from 'react';
import Counter from "./Counter";
import Button from "./Button";
import s from './app.module.css'


function App() {
    const [count, setCount] = useState(0)
    const increment = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className={s.scoreboard}>
            <div className={s.counter}>
                <Counter value={count}/>
            </div>
            <div className={s.buttons} >
                <Button callBack={reset} name={'reset'} disabled={count < 5}/>
                <Button callBack={increment} name={'increment'} disabled={count == 5}/>
            </div>
        </div>

    );
}

export default App;
