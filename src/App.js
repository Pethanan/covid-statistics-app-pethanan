import logo from "./logo.svg";
import "./App.css";
import CountrySearchBar from "./components/CountrySearchBar";
import { useEffect, useState } from "react";
import ContinentsList from "./components/ContinentsList";

function App() {
  const [statistics, setStatistics] = useState([]);

  const fetchStatistics = async () => {
    const statisticsResponse = await fetch(
      "https://covid-193.p.rapidapi.com/statistics",
      {
        headers: {
          "X-RapidAPI-Key":
            "338597b050mshf9c05150d787cb2p13356cjsn3b93bcde32b5",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      }
    );
    const statisticsData = await statisticsResponse.json();
    setStatistics(statisticsData.response);
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchStatistics();
    }, 900000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <header>Covid Ststistics report</header>
      <CountrySearchBar />
      <ContinentsList statistics={statistics} />
    </div>
  );
}

export default App;
