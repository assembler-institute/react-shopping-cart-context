function FormPaymentDetails() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">
            Information
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Delivery
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-between">
        <div>
          <b>Billing Address</b>
        </div>
        <div>Step 2 of 3</div>
      </div>
      <hr />
    </>
  );
}

export default FormPaymentDetails;
