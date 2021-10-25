import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import getCartTotal from "../../utils/getCartTotal";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

function CheckoutItemList(props) {
	const { cartItems } = useContext(AppContext);

	return (
		<>
			<aside>
				<div className="row flex-column">
					<div className="col shopping__cart__header">
						<h5 className="my-2 fw-normal">Cart Items</h5>
						<hr className="mb-3" />
					</div>

					{cartItems.length > 0 ? (
						cartItems.map((item) => (
							<CheckoutItem
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								img={item.img}
								quantity={item.quantity}
							/>
						))
					) : (
						<div className="col mb-4">
							<h4>Your cart is empty</h4>
						</div>
					)}
					<div className="col shopping__cart__footer">
						<div className="row row-cols-1 flex-column">
							<div className="col">
								<div className="d-flex justify-content-between">
									<h6 className="my-0">Subtotal</h6>
									<h6 className="my-0">{getCartTotal(cartItems)}€</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}

export default CheckoutItemList;
