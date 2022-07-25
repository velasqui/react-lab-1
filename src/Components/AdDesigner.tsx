import { useState } from 'react';
import './AdDesigner.css'
import Ad from './Ad';

function AdDesigner() {
    const [flavor, setFlavor] = useState('Coconut');
    const [theme, setTheme] = useState(false);
    const [count, setCount] = useState(70);

    const handleCoconutFlavor = () => {
        if (flavor) {
            setFlavor('Coconut');
        };
    }

    const handleMangoFlavor = () => {
        if (flavor) {
            setFlavor('Mango');
        };
    }

    const handleRaspberryFlavor = () => {
        if (flavor) {
            setFlavor('Raspberry');
        };
    }

    const lightTheme = () => {
        setTheme(true);
    };
    const darkTheme = () => {
        setTheme(false);
    };

    const incrementCount = () => {
        setCount(count + 2);
    };

    const decrementCount = () => {
        setCount(count - 2);
    };

    return (
        <div className="ad-designer">
            <h2>Ad Designer</h2>

            <div className={`ad-box ${theme === true && 'dark-theme'}`}>
                <p>Vote For</p>
                <p className='flavor' style={{fontSize: count}}>{flavor}</p>
            </div>

            <div className='buttons'>
                <h3>What to Support</h3>
                <button className={`${flavor === 'Coconut' && 'button-picked'}`} onClick={handleCoconutFlavor}>Coconut</button>
                <button className={`${flavor === 'Mango' && 'button-picked'}`} onClick={handleMangoFlavor}>Mango</button>
                <button className={`${flavor === 'Raspberry' && 'button-picked'}`} onClick={handleRaspberryFlavor}>Raspberry</button>
            </div>

            <div className='buttons'>
                <h3>Color Theme</h3>
                <button className={`${theme === true && 'button-picked'}`} onClick={lightTheme}>Light</button>
                <button className={`${theme === false && 'button-picked'}`} onClick={darkTheme}>Dark</button>
            </div>

            <div className='buttons'>
                <h3>Font Size</h3>
                <div className='counter'>
                <button onClick={decrementCount}>Down</button>
                <p className='count'>{count}</p>
                <button onClick={incrementCount}>Up</button>
                </div>
            </div>

        </div>
    )
};

export default AdDesigner;