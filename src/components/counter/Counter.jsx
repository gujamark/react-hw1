import IncrementButton from '../incrementButton';
import Theme from '../theme';
import { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(props.initialValue);

    const onButtonClick = (value) => {
        setCount(count + value);
    };

    return (
        <div>
            <Theme InitialbgColor="blue" textInside={count}/>
            <br />
            <IncrementButton incrementValue="-100" onClick={() => onButtonClick(-100)}/>
            <IncrementButton incrementValue="-5" onClick={() => onButtonClick(-5)}/>
            <IncrementButton incrementValue="-1" onClick={() => onButtonClick(-1)}/>
            <IncrementButton incrementValue="+1" onClick={() => onButtonClick(1)}/>
            <IncrementButton incrementValue="+5" onClick={() => onButtonClick(5)}/>
            <IncrementButton incrementValue="+100" onClick={() => onButtonClick(100)}/>
        </div>
    );
}

export default Counter;