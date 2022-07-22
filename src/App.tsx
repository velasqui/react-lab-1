import './App.css';
import AdDesigner from './Components/AdDesigner';
import Header from './Components/Header';
import Votes from './Components/Votes';

function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
