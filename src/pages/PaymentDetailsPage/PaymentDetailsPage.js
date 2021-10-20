import FormPaymentDetails from "../../components/FormPaymentDetails";
import SummaryOrder from "../../components/SummaryOrder";
import withLayout from "../../hoc/withLayout";

function PaymentDetailsPage() {
  return (
    <div className="row">
      <div className="col col-8">
        <FormPaymentDetails />
      </div>
      <SummaryOrder className="col col-4" />
    </div>
  );
}

export default withLayout(PaymentDetailsPage);
