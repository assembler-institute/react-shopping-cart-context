function CheckoutItem({ id, img, title, price, quantity }) {
	return (
		<div className="col">
			<div className="row flex-column">
				<div className="col">
					<div className="row">
						<div className="col-12 col-xl-4 mb-3 mb-xl-0">
							<img className="ShoppingCartItem__img" src={img} alt="" />
						</div>
						<div className="col-12 col-xl-8">
							<div className="row flex-column">
								<div className="col">
									<h6>{title}</h6>
								</div>
								<div className="col d-flex justify-content-between">
									<span>{price}€</span>
									<span>x{quantity}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<hr />
				</div>
			</div>
		</div>
	);
}

export default CheckoutItem;
