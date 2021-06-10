import React, { useState, useEffect } from "react";

import "./ProgressBar.scss";

// export default function ProgressBar({ done }) {
//   const [style, setStyle] = useState({});

//   setTimeout(() => {
//     const newStyle = {
//       opacity: 1,
//       width: `${done}%`,
//     };

//     setStyle(newStyle);
//   }, 1000);

//   return (
//     <div className="progressBar__container">
//       <div className="progress-done" style={style}>
//         {done}%
//       </div>
//     </div>
//   );
// }

export default function ProgressBar({ ...routeProps }) {
  const [currentActive, setCurrentActive] = useState(1);

  function handleProgressBar(circles) {
    const progressBar = document.getElementById("progress__bar");
    if (circles === 1) {
      progressBar.style.width = "0%";
    } else if (circles === 2) {
      progressBar.style.width = "33%";
    } else if (circles === 3) {
      progressBar.style.width = "66%";
    } else {
      progressBar.style.width = "100%";
    }
    // console.log(circles);
    // console.log(currentActive);
  }

  useEffect(() => {
    const circles = document.querySelectorAll(".progress__circle");
    const activeUrl = routeProps.match.path;
    const activeUrlstring = activeUrl.substring(15, 16);
    const activeUrlId = parseInt(activeUrlstring, 16);

    circles.forEach((circle, index) => {
      const newIndex = index + 1;
      if (newIndex === activeUrlId) {
        setCurrentActive(activeUrlId);
        circle.classList.add("activeCircle");
        console.log(activeUrlId);
      } else if (activeUrl === "/checkout/order-summary") {
        setCurrentActive(activeUrlId);
        circles[3].classList.add("activeCircle");
      } else {
        circle.classList.remove("activeCircle");
      }
      // console.log(circles[3]);
    });

    handleProgressBar(currentActive, circles);
  }, [currentActive]);

  return (
    <>
      <section className="container__temp">
        <div className="progress__container">
          <div className="progress__circle">
            <span className="material-icons">person</span>
          </div>
          <div className="progress__circle">
            <span className="material-icons">local_shipping</span>
          </div>
          <div className="progress__circle">
            <span className="material-icons">credit_card</span>
          </div>
          <div className="progress__circle">
            <span className="material-icons">grading</span>
          </div>
          <div className="progress__bar" id="progress__bar" />
          <div className="progress__bar--grey" />
        </div>
      </section>
    </>
  );
}
