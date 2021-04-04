import './App.css';
import Header from './components/Header';
import Provider from './context/Provider';
import PokeCard from './components/PokeCard';
function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <PokeCard />
      </Provider>
    </div>
  );
}

export default App;
