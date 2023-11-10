import logo from './logo.svg';
import './App.css';
import Commentaire from './components/Commentaire';
import Icone from './components/Icone';
import Pictogramme from './components/Pictogramme';

function App() {
  return (
    <div className="App">
      <Commentaire/>
      <Icone/>
      <Pictogramme/>
    </div>
  );
}

export default App;
