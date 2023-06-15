import React, { useState } from "react";

const ContinentStatistics = ({ continentStatistics, continentName }) => {
  const [expandData, setExpandData] = useState(false);

  const countryWiseStatisticsData = continentStatistics.map((country) => (
    <tr>
      <td>{country.day}</td>
      <td>{country.country}</td>
      <td>{country.population}</td>
      <td>{country.cases.total}</td>
      <td>{country.cases.recovered ? country.cases.recovered : 0}</td>
      <td>{country.cases.critical ? country.cases.critical : 0}</td>
      <td>{country.cases.active ? country.cases.active : 0}</td>
      <td>{country.deaths.total ? country.deaths.total : 0}</td>
      <td></td>
    </tr>
  ));
  return (
    <li>
      <span>{continentName}</span>
      <span
        onClick={() => {
          setExpandData((prev) => !prev);
        }}
      >
        +
      </span>
      <table style={{ display: "none" }}>
        <thead>
          <tr>
            <td>Date</td>
            <td>Country</td>
            <td>Population</td>
            <td>Total Cases</td>
            <td>Recovered Cases</td>
            <td>Critical Cases</td>
            <td>Active Cases</td>
            <td>Total Deaths</td>
            <td>Confirmed Deaths per Million</td>
          </tr>
        </thead>
        <tbody>{statisticsData}</tbody>
      </table>
    </li>
  );
};

export default ContinentStatistics;
