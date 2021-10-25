import { NavLink } from "react-router-dom"
import { useUser } from "../../context/userContext/userContex"

function CheckoutHeader (){
     const {  userDataValidPage1,userDataValidPage2}= useUser()
    return (
        <>
            <header>
                <div className="justify-content-between checkout-header mb-5">
                    <nav className="d-flex justify-content-around steps-nav">
                        <NavLink exact activeClassName="is-active" to="/checkout/step-1">
                            Information
                        </NavLink>
                        {userDataValidPage1? (
                        <NavLink
                            disabled={!userDataValidPage1}
                            exact
                            activeClassName="is-active"
                            to="/checkout/step-2"
                        >
                            Shipping
                        </NavLink>
                        ) : (
                        <span>Shipping</span>
                        )}
                        {userDataValidPage2 ?
                        (
                        <NavLink
                            disabled={!userDataValidPage2}
                            exact
                            activeClassName="is-active"
                            to="/checkout/step-3"
                        >
                            Payment
                        </NavLink>
                        ) : (
                        <span>Payment</span>
                        )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
} export default CheckoutHeader
