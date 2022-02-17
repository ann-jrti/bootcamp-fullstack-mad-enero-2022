import './App.css';
import PokeList from './components/poke-list';
import PokeHeader from './components/poke-header';

function App() {
  return (
    <div className="App">
      <PokeHeader></PokeHeader>
      <main className="pokemon__cards">
        <PokeList></PokeList>
      </main>
    
    </div>
  );
}

export default App;
