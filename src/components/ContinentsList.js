import React, { useState } from "react";
import ContinentStatistics from "./ContinentStatistics";

const ContinentsList = ({ statistics }) => {
  const continents = [
    "Asia",
    "Africa",
    "Europe",
    "Asia",
    "South-America",
    "North-America",
    "Australia",
  ];
  console.log(statistics);

  const [continentCountriesStatistics, setContinentCountriesStatistics] =
    useState({});

  const asiaStatistics = statistics.filter(
    (country) => country.continent === "Asia"
  );
  const europeStatistics = statistics.filter(
    (country) => country.continent === "Europe"
  );
  const africaStatistics = statistics.filter(
    (country) => country.continent === "Africa"
  );
  const australiaStatistics = statistics.filter(
    (country) => country.continent === "Australia"
  );

  const northAmericaStatistics = statistics.filter(
    (country) => country.continent === "North-America"
  );

  const southAmericaStatistics = statistics.filter(
    (country) => country.continent === "South-America"
  );

  setContinentCountriesStatistics({
    sia: asiaStatistics,
    australia: australiaStatistics,
    africa: africaStatistics,
    northAmerica: northAmericaStatistics,
    southAmerica: southAmericaStatistics,
    europe: europeStatistics,
  });

  const continentsList = continents.map((continent) => (
    <ContinentStatistics
      continentStatistics={
        continentCountriesStatistics[continent.toLocaleLowerCase()]
      }
      continentName={continent}
    />
  ));
  return <ul>{continentsList}</ul>;
};

export default ContinentsList;
