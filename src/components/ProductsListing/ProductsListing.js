import React, { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";
import { useProducts } from "../Context/reducer";

import ItemCard from "../ItemCard";

function ProductsListing({
  /* products,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart, */
  ...props
}) {
  const { products } = useProducts();
  console.log(products);
  return (
    <section className="row" {...props}>
      {products && products.map((product) => (
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
