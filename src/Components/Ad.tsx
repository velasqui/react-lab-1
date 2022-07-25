interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: Props) {

    return (
        <div className={`ad-box ${darkTheme === false && 'dark-theme'}`}>
            <p>Vote For</p>
            <p className='flavor' style={{fontSize: fontSize}}>{flavor}</p>
        </div>
    )
}

export default Ad;