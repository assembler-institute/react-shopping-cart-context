import React from "react";

import NewProductForm from "../../components/NewProductForm";
import withLayout from "../../hoc/withLayout";

import { useProducts } from "../../context/products/reducer";

function NewProduct() {
  const { saveNewProduct } = useProducts();

  return (
    <div className="row justify-content-center">
      <div className="col col-8">
        <div className="row">
          <header className="col col-12">
            <h1>New product</h1>
          </header>
          <div className="col col-12">
            <hr />
          </div>

          <div className="col col-12">
            <NewProductForm saveNewProduct={saveNewProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(NewProduct);
