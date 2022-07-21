import { useState } from 'react';
import './AdDesigner.css'

function AdDesigner() {
    const [flavor, setFlavor] = useState('Coconut');
    const [theme, setTheme] = useState(false);
    const [count, setCount] = useState(70);

    const lightTheme = () => {
        setTheme(false);
    };
    const darkTheme = () => {
        setTheme(true);
    };

    const incrementCount = () => {
        setCount(count + 2);
    };

    const decrementCount = () => {
        setCount(count - 2);
    };

    return (
        <div>
            <h2>Ad Designer</h2>

            <div className={`ad-box ${theme === true && 'dark-theme'}`}>
                <p>Vote For</p>
                <p className='flavor' style={{fontSize: count}}>{flavor}</p>
            </div>

            <div className='buttons'>
                <h3>What to Support</h3>
                <button>Coconut</button>
                <button>Mango</button>
                <button>Raspberry</button>
            </div>

            <div className='buttons'>
                <h3>Color Theme</h3>
                <button onClick={lightTheme}>Light</button>
                <button onClick={darkTheme}>Dark</button>
            </div>

            <div className='buttons'>
                <h3>Font Size</h3>
                <button onClick={decrementCount}>Down</button>
                <p>{count}</p>
                <button onClick={incrementCount}>Up</button>
            </div>

        </div>
    )
};

export default AdDesigner;