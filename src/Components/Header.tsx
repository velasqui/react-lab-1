import './Header.css';

interface Props {
    name: string;
}

function Header({name}: Props) {
    return (
        <div className='header'>
            <header>Ice Cream Wars</header>
            <p>Welcome {name}</p>
        </div>
    )
}

export default Header;