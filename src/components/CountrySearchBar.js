import React, { useState } from "react";
import "./CountrySearchBar.css";

const CountrySearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [countrySearchText, setCountrySearchText] = useState("");
  const [message, setMessage] = useState("Enter Country Name");
  const [date, setDate] = useState(new Date());
  const [statisticsData, setStatisticsData] = useState(null);

  const countrySearchTextChangeHandler = (e) => {
    setCountrySearchText(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const trimmedEnteredSearchText = countrySearchText.trim();

    const searchCountryStatistics = async () => {
      try {
        const fetchStatisticsResponse = await fetch(
          `https://covid-193.p.rapidapi.com/statistics?country=${trimmedEnteredSearchText}`,
          {
            headers: {
              "X-RapidAPI-Key":
                "338597b050mshf9c05150d787cb2p13356cjsn3b93bcde32b5",
              "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
            },
          }
        );
        const fetchStatisticsData = await fetchStatisticsResponse.json();
        setStatisticsData(fetchStatisticsData.response[0]);
        setDate(new Date(fetchStatisticsData.response[0].time));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setMessage("Enter Valid Country Name");
      }
    };
    searchCountryStatistics();
  };

  return (
    <div className="search-bar-container">
      <h4>Search By Country</h4>
      <form onSubmit={searchSubmitHandler}>
        <input
          placeholder="Enter Country name"
          type="text"
          value={countrySearchText}
          onChange={countrySearchTextChangeHandler}
        ></input>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {statisticsData ? (
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Country</td>
              <td>Continent</td>
              <td>Population</td>
              <td>Tests</td>
              <td>Total Cases</td>
              <td>Recovered Cases</td>
              <td>Critical Cases</td>
              <td>Active Cases</td>
              <td>Total Deaths</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{date.toLocaleString()}</td>
              <td>{statisticsData.country}</td>
              <td>{statisticsData.continent}</td>
              <td>{statisticsData.population}</td>
              <td>{statisticsData.tests.total}</td>
              <td>{statisticsData.cases.total}</td>
              <td>
                {statisticsData.cases.recovered
                  ? statisticsData.cases.recovered
                  : 0}
              </td>
              <td>
                {statisticsData.cases.critical
                  ? statisticsData.cases.critical
                  : 0}
              </td>
              <td>
                {statisticsData.cases.active ? statisticsData.cases.active : 0}
              </td>
              <td>
                {statisticsData.deaths.total ? statisticsData.deaths.total : 0}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p style={{ color: "blue", fontSize: "14px" }}>{message}</p>
      )}
    </div>
  );
};

export default CountrySearchBar;
