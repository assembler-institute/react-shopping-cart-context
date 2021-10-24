import React from "react";
import { useAppContext } from "../../context/App/AppContext";

import ItemCard from "../ItemCard";

function ProductsListing() {
  const { products } = useAppContext();

  return (
    <section className="row">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ItemCard
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            shortDescription={product.shortDescription}
            upVotes={product.votes.upVotes}
            downVotes={product.votes.downVotes}
            isFavorite={product.isFavorite}
          />
        ))}
    </section>
  );
}

export default ProductsListing;
