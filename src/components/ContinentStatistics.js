import React, { useState } from "react";
import "./ContinentStatistics.css";

const ContinentStatistics = ({ continentStatistics, continentName }) => {
  const [dataExpand, setDataExpand] = useState(false);
  const dataExpandHandler = () => {
    setDataExpand((prev) => !prev);
  };
  const countryWiseStatisticsData = !continentStatistics ? (
    <></>
  ) : (
    continentStatistics.map((country) => (
      <tr key={country.country}>
        <td>{country.day}</td>
        <td>{country.country}</td>
        <td>{country.population}</td>
        <td>{country.cases.total}</td>
        <td>{country.cases.recovered ? country.cases.recovered : 0}</td>
        <td>{country.cases.critical ? country.cases.critical : 0}</td>
        <td>{country.cases.active ? country.cases.active : 0}</td>
        <td>{country.deaths.total ? country.deaths.total : 0}</td>
      </tr>
    ))
  );
  return (
    <li
      className="continent-data-container"
      key={continentName + continentName}
    >
      <span className="continent-name">{continentName}</span>
      <span className="expand-action" onClick={dataExpandHandler}>
        +
      </span>
      <table
        className={`${
          !dataExpand
            ? "hidden-data continent-statistics"
            : "continent-statistics"
        }`}
      >
        <thead>
          <tr>
            <td key="date">Date</td>
            <td key="country">Country</td>
            <td key="population">Population</td>
            <td key="cases-total">Total Cases</td>
            <td key="recovered">Recovered Cases</td>
            <td key="critical">Critical Cases</td>
            <td key="activeCases">Active Cases</td>
            <td key="totalDeaths">Total Deaths</td>
          </tr>
        </thead>
        {countryWiseStatisticsData ? (
          <tbody>{countryWiseStatisticsData}</tbody>
        ) : (
          <p>No Data available for this continent</p>
        )}
      </table>
    </li>
  );
};

export default ContinentStatistics;
