import React, { useEffect, useState } from "react";
import ContinentStatistics from "./ContinentStatistics";
import "./ContinentsList.css";

const ContinentsList = () => {
  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStatistics = async () => {
    try {
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
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
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

  const continents = [
    "asia",
    "africa",
    "europe",
    "southAmerica",
    "northAmerica",
    "oceania",
  ];

  const asiaStatistics = statistics.filter(
    (country) => country.continent === "Asia"
  );
  const europeStatistics = statistics.filter(
    (country) => country.continent === "Europe"
  );
  const africaStatistics = statistics.filter(
    (country) => country.continent === "Africa"
  );
  const oceaniaStatistics = statistics.filter(
    (country) => country.continent === "Oceania"
  );

  const northAmericaStatistics = statistics.filter(
    (country) => country.continent === "North-America"
  );

  const southAmericaStatistics = statistics.filter(
    (country) => country.continent === "South-America"
  );

  const ContinentCountriesStatistics = {
    asia: asiaStatistics,
    oceania: oceaniaStatistics,
    africa: africaStatistics,
    northAmerica: northAmericaStatistics,
    southAmerica: southAmericaStatistics,
    europe: europeStatistics,
  };

  const continentsList = continents.map((continent) => (
    <ContinentStatistics
      key={continent}
      continentStatistics={ContinentCountriesStatistics[continent]}
      continentName={continent.toUpperCase()}
    />
  ));
  return (
    <>
      <header style={{ fontWeight: "600", marginBottom: "10px" }}>
        Covid Statistics - Continents
      </header>
      {loading && <p>...loading...</p>}
      <ul className="continents-list">{continentsList}</ul>
    </>
  );
};

export default ContinentsList;
