import react from "react";
import { useProducts } from "../Context/reducer";
import ShoppingCartItem from "../ShoppingCartItem";

import { getCartTotal,getCartTotalIVA } from '../Cart/'

function SummaryOrder({ ...props }) {
  const { cartItems } = useProducts();
  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Order Summary</h2>
          <hr className="mb-3" />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity} 
             /*  unitsInStock={item.unitsInStock}*/
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <hr />
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between flex-column">
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span> {getCartTotal(cartItems)} €</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>21% IVA</span>
                  <span>{ (getCartTotal(cartItems) * 0.21).toFixed(2) } €</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>Calculted to the next step</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span> {getCartTotalIVA(cartItems).toFixed(2) }€</span>
                </div>
              </div>
              <hr />
            </div>
            <div className="col">
              {/* <Button disabled={cartItems.length <= 0 && true}>Checkout</Button> */}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SummaryOrder;
