import React, { useState, useEffect } from "react";
import cn from "clsx";
import { RiArrowDownSLine } from "react-icons/ri";
import flagSpain from "../../img/flag-spain.png";
import flagMorocco from "../../img/flag-morocco.png";

const availableCountries = [
  { name: "Spain", flag: flagSpain, code: "+34" },
  { name: "Morocco", flag: flagMorocco, code: "+212" },
];

function SelectCountryCode() {
  const [country, setCountry] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    setCountry({ flag: flagMorocco, code: "+212" });
  }, []);

  const classNames = cn({
    "list-group position-absolute start-0 end-0": true,
    "d-none": !show,
  });

  function toggleDisplay() {
    if (show) {
      setShow(false);
      return;
    }
    setShow(true);
  }

  function handleClick(params = {}) {
    setShow(false);
    setCountry(params);
  }

  function countryOption(arr) {
    return arr.map((_country) => {
      return (
        <li
          key={_country.name}
          className="list-group-item list-group-item-action px-2 py-0"
        >
          <button
            type="button"
            className="d-flex align-items-center w-100 bg-transparent border-0 p-0"
            onClick={() =>
              handleClick({ flag: _country.flag, code: _country.code })
            }
          >
            <img style={{ maxWidth: "38px" }} src={_country.flag} alt="spain" />
            <p className="my-0 mx-2">{_country.code}</p>
          </button>
        </li>
      );
    });
  }

  return (
    <ul
      className="p-0 m-0 position-absolute top-0 bottom-0"
      style={{
        listStyleType: "none",
      }}
    >
      <li className="d-flex justify-content-between align-items-center px-2 py-1 ">
        <div className="d-flex align-items-center">
          <img style={{ maxWidth: "38px" }} src={country.flag} alt="spain" />
          <p className="my-0 mx-2">{country.code}</p>
        </div>

        <RiArrowDownSLine onClick={toggleDisplay} />
      </li>

      <ul className={classNames}>{countryOption(availableCountries)}</ul>
    </ul>
  );
}

export default SelectCountryCode;
