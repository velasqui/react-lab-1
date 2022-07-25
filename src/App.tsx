import './App.css';
import AdDesigner from './Components/AdDesigner';
import Header from './Components/Header';
import Votes from './Components/Votes';
import Ad from './Components/Ad';

function App() {
  return (
    <div className="App">
      <Header name='Ian'/>
      <div className='ads'>
      <Ad flavor='Eskimo Kisses' fontSize={50} darkTheme={true} />
      <Ad flavor='Vanilla Bean' fontSize={40} darkTheme={false} />
      <Ad flavor='Mint Oreo' fontSize={40} darkTheme={true} />
      </div>
      <div className='content-section'>
      <AdDesigner />
      <Votes />
      </div>
    </div>
  );
}

export default App;
