import FormPaymentDetails from "../../components/FormPaymentDetails";
import SummaryOrder from "../../components/SummaryOrder";

function PaymentDetailsPage() {
    return (
        <div className="row">
          <div className="col col-8">
             <FormPaymentDetails/>
          </div>
           <SummaryOrder className="col col-4" /> 
        </div>
      );
}

export default PaymentDetailsPage;