import React, { useContext } from "react";
import CartContext from "../../context/cartContext";

import ItemCard from "../ItemCard";

function ProductsListing({
  products,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
}) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <section className="row">
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
          handleAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductsListing;
