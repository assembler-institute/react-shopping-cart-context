import React, { useContext } from "react";
import EcommerceContext from "../../context/EcommerceContext";
import ProductsListing from "../../components/ProductsListing";
import Cart from "../../components/Cart";
import withLayout from "../../hoc/withLayout";

function Home() {

  const { products, cartItems, isLoading, hasError } = useContext(EcommerceContext);

  return (
    <div className="row">
      <div className="col col-8">
        <div className="row">
          <div className="col col-12">
            <header className="jumbotron">
              <h1 className="display-4">Shoe shop</h1>
              <p className="lead">
                This is the best shoe shop ever, you will never find a better
                one.
              </p>
              <p className="font-weight-bold">Buy now!</p>
            </header>
          </div>
          {isLoading && (
            <div className="col col-12">
              <h2>Loading products...</h2>
            </div>
          )}
          {hasError && (
            <div className="col col-12">
              <h2>Something went wrong...</h2>
              <pre>
                <code>{hasError}</code>
              </pre>
            </div>
          )}
          {!isLoading && !hasError && (
            <div className="col col-12">
              <ProductsListing products={products} />
            </div>
          )}
        </div>
      </div>

      <Cart
        className="col col-4"
        cartItems={cartItems}
        handleRemove={handleRemove}
        handleChange={handleChange}
      />
    </div>
  );
}

export default withLayout(Home);
