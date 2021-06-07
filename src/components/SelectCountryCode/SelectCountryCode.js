import React, { useState, useEffect, useRef } from "react";
import cn from "clsx";
import { RiArrowDownSLine } from "react-icons/ri";
import flagSpain from "../../img/flag-spain.png";
import flagMorocco from "../../img/flag-morocco.png";

function SelectCountryCode() {
  const [country, setCountry] = useState({});
  const [show, setShow] = useState(false);
  const ulRef = useRef(null);
  useEffect(() => {
    setCountry({ flag: flagMorocco, code: "+212" });
    // ulRef.current.style.display = "none";
  }, []);

  const classNames = cn({
    "list-group position-absolute start-0 end-0": true,
    "d-none": !show,
  });

  function toggleDisplay() {
    // const display = ulRef.current.style.display;
    // if (display === "none") {
    //   ulRef.current.style.display = "block";
    //   return;
    // }
    // ulRef.current.style.display = "none";
    if (show) {
      setShow(false);
      return;
    }
    setShow(true);
  }

  function handleClick(params = {}) {
    // ulRef.current.style.display = "none";
    setShow(false);
    setCountry(params);
  }

  return (
    <ul
      className="p-0 m-0 h-100 position-absolute top-0 bottom-0"
      style={{
        listStyleType: "none",
      }}
    >
      <li className="d-flex justify-content-between align-items-center px-2">
        <div className="d-flex align-items-center">
          <img style={{ maxWidth: "38px" }} src={country.flag} alt="spain" />
          <p className="my-0 mx-2">{country.code}</p>
        </div>
        <RiArrowDownSLine onClick={toggleDisplay} />
      </li>

      <ul ref={ulRef} className={classNames}>
        <li className="list-group-item list-group-item-action px-2 py-1">
          <button
            type="button"
            className="d-flex align-items-center w-100 bg-transparent border-0 p-0"
            onClick={() => handleClick({ flag: flagMorocco, code: "+212" })}
          >
            <img style={{ maxWidth: "38px" }} src={flagMorocco} alt="spain" />
            <p className="my-0 mx-2">+212</p>
          </button>
        </li>
        <li className="list-group-item list-group-item-action px-2 py-1">
          <button
            type="button"
            className="d-flex align-items-center w-100 bg-transparent border-0 p-0"
            onClick={() => handleClick({ flag: flagSpain, code: "+34" })}
          >
            <img style={{ maxWidth: "38px" }} src={flagSpain} alt="spain" />
            <p className="my-0 mx-2">+34</p>
          </button>
        </li>
      </ul>
    </ul>
  );
}

export default SelectCountryCode;
