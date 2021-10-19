import React from "react";

import ItemCard from "../ItemCard";

import { useProducts } from "../../context/products/reducer";

function ProductsListing({
  // products,
  // handleDownVote,
  // handleUpVote,
  // handleSetFavorite,
  // handleAddToCart,
  ...props
}) {

  const {
    products,
    productIds,
    // cartItems,
    // isLoading,
    // hasError,
    // loadingError,
    handleAddToCart,
    // handleChange,
    // handleRemove,
    handleDownVote,
    handleUpVote,
    handleSetFavorite,
    // saveNewProduct
  } = useProducts();

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
