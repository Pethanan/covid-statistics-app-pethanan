import "./App.css";
import CountrySearchBar from "./components/CountrySearchBar";
import ContinentsList from "./components/ContinentsList";

function App() {
  return (
    <div className="App">
      <header>Pethanan - Covid Statistics report App</header>
      <CountrySearchBar />
      <ContinentsList />
    </div>
  );
}

export default App;
