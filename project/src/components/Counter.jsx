import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>UGA BUGA</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </div>
    );
};

export default Counter;