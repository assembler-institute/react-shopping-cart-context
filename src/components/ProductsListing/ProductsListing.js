import React, { useContext } from "react";

import ItemCard from "../ItemCard";

import CartContext from "../../context/cart-context";

function ProductsListing({
  products,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  ...props
}) {
  const { add } = useContext(CartContext);

  return (
    <section className="row" {...props}>
      {products.map((product) => (
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
          handleAddToCart={add}
        />
      ))}
    </section>
  );
}

export default ProductsListing;
