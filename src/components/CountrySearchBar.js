import React, { useState } from "react";

const CountrySearchBar = () => {
  const [countrySearchText, setCountrySearchText] = useState("");

  const countrySearchTextChangeHandler = (e) => {
    setCountrySearchText(e.target.value);
  };
  const searchSubmitHandler = () => {
    const trimmedEnteredSearchText = countrySearchText.trim();
  };

  return (
    <div>
      <form onSubmit={searchSubmitHandler}>
        <input
          type="text"
          value={countrySearchText}
          onChange={countrySearchTextChangeHandler}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CountrySearchBar;
