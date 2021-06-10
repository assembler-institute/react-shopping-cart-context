/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import flagSpain from "../../img/flag-spain.png";
import flagMorocco from "../../img/flag-morocco.png";
import flagArgentina from "../../img/flag-argentina.png";

const availableCountries = [
  { name: "Spain", flag: flagSpain, code: "+34" },
  { name: "Morocco", flag: flagMorocco, code: "+212" },
  { name: "Argentina", flag: flagArgentina, code: "+54" },
];

function SelectCountryCode() {
  const [country, setCountry] = useState({});
  useEffect(() => {
    setCountry({ flag: flagArgentina, code: "+54" });
  }, []);

  function countryOption(arr) {
    return arr.map((_country) => {
      return (
        <li key={_country.code} className="dropdown-item p-0 ps-1">
          <button
            className="d-flex align-items-center bg-transparent w-100 border-0 py-2"
            type="button"
            onClick={() =>
              setCountry({ flag: _country.flag, code: _country.code })
            }
          >
            <img style={{ maxWidth: "40px" }} src={_country.flag} alt="spain" />
            <p className="my-0 mx-2">{_country.code}</p>
          </button>
        </li>
      );
    });
  }

  return (
    <div className="dropdown position-absolute top-0 bottom-0 ">
      <button
        className="dropdown-toggle h-100 bg-transparent border-0 d-flex align-items-center justify-content-between"
        // className="dropdown-toggle h-100 bg-transparent border-0 d-flex align-items-center justify-content-between border-end border-3"
        style={{ maxHeight: "48px" }}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="d-flex align-items-center bg-transparent border-0">
          <img style={{ maxWidth: "40px" }} src={country.flag} alt="spain" />
          <p className="my-0 mx-1">{country.code}</p>
        </div>
      </button>

      <ul
        className="dropdown-menu col-12 p-0"
        aria-labelledby="dropdownMenuButton1"
      >
        {countryOption(availableCountries)}
      </ul>
    </div>
  );
}

export default SelectCountryCode;
