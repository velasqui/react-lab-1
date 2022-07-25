import { useState } from 'react';
import './Votes.css'

function Votes() {
    const [coconutVotes, setCoconutVotes] = useState(0);
    const [mangoVotes, setMangoVotes] = useState(0);
    const [raspberryVotes, setRaspberryVotes] = useState(0);

    const totalVotes = coconutVotes + mangoVotes + raspberryVotes;

    const coconutPercentage = (coconutVotes / totalVotes) * 100;
    const mangoPercentage = (mangoVotes / totalVotes) * 100;
    const raspberryPercentage = (raspberryVotes / totalVotes) * 100;

    const voteForCoconut = () => {
        setCoconutVotes(coconutVotes + 1);
    }
    const voteForMango = () => {
        setMangoVotes(mangoVotes + 1);
    }
    const voteForRaspberry = () => {
        setRaspberryVotes(raspberryVotes + 1);
    }

    return (
        <div className='votes'>
            <h2>Vote Here</h2>
            <div>
                <button onClick={voteForCoconut}>Coconut</button>
                <button onClick={voteForMango}>Mango</button>
                <button onClick={voteForRaspberry}>Raspberry</button>
            </div>
            {totalVotes === 0 && (<p className='empty-votes'>No votes yet</p>)}
            <div>
                {coconutVotes > 0 && (<div>
                    <p className='flavors'>Coconut: {coconutVotes} ({coconutPercentage.toFixed(1)} %)</p>
                    <div className='coconut-bar' style={{width: coconutPercentage}}></div>
                </div>)}
                {mangoVotes > 0 && (<div>
                    <p className='flavors'>Mango: {mangoVotes} ({mangoPercentage.toFixed(1)} %)</p>
                    <div className='mango-bar' style={{width: mangoPercentage}}></div>
                </div>)}
                {raspberryVotes > 0 && (<div>
                    <p className='flavors'>Raspberry: {raspberryVotes} ({raspberryPercentage.toFixed(1)} %)</p>
                    <div className='raspberry-bar' style={{width: raspberryPercentage}}></div>
                </div>)}
            </div>
        </div>
    )
}

export default Votes;