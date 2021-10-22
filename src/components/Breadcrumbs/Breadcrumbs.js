import './style.scss'

function Breadcrumbs({active}) {
    console.log(active)
  return (
    <div className="wrapper">
      <ul>
        <li className={active === "info" && "active"}>
          <a>
            <i className="fas fa-user icon"></i>
            <p>Information</p>
          </a>
        </li>
        <li className={active === "address" && "active"}>
          <a>
            <i className="fas fa-address-book icon"></i>
            <p>Delivery</p>
          </a>
        </li>
        <li className={active === "payment" && "active"}>
          <a>
            <i className="fas fa-money-bill-wave icon"></i>
            <p>Payment</p>
          </a>
        </li>
        <li className={active === "resume" && "active"}>
          <a>
            <i className="fas fa-check-circle icon"></i>
            <p>Completed</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
