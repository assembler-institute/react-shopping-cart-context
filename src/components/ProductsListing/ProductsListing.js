import React from "react";

import { ItemCard } from "components";

import { useProducts, useCartItems } from "context";

function ProductsListing({ ...props }) {
  const {
    products,
    productIds,
    handleDownVote,
    handleUpVote,
    handleSetFavorite,
  } = useProducts();

  const { handleAddToCart } = useCartItems();

  return (
    <section className="row" {...props}>
      {productIds.map((productId) => {
        const product = products[productId]

        return (
          <ItemCard
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            shortDescription={product.shortDescription}
            upVotes={product.votes.upVotes}
            handleUpVote={handleUpVote}
            downVotes={product.votes.downVotes}
            handleDownVote={handleDownVote}
            isFavorite={product.isFavorite}
            handleSetFavorite={handleSetFavorite}
            handleAddToCart={handleAddToCart}
          />
        )
      })}
    </section>
  );
}

export default ProductsListing;
