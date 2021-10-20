export function handleAddToCart({prevState, payload:productId}) {

  const prevCartItem = prevState.cartItems.find((item) => item.id === productId);
  const foundProduct = prevState.products.find((product) => product.id === productId);

  if (prevCartItem) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id !== productId) {
        return item;
      }

      if (item.quantity >= item.unitsInStock) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity + 1,
      };
    });

    return {...prevState,cartItems:updatedCartItems}
  }

  const updatedProduct = buildNewCartItem(foundProduct);

  return {...prevState, cartItems:[...prevState.cartItems, updatedProduct]}
}

function buildNewCartItem(cartItem) {
  if (cartItem.quantity >= cartItem.unitsInStock) {
    return cartItem;
  }

  return {
    id: cartItem.id,
    title: cartItem.title,
    img: cartItem.img,
    price: cartItem.price,
    unitsInStock: cartItem.unitsInStock,
    createdAt: cartItem.createdAt,
    updatedAt: cartItem.updatedAt,
    quantity: cartItem.quantity + 1,
  };
}

export function handleChange({prevState, event, productId}) {
  const updatedCartItems = cartItems.map((item) => {
    if (item.id === productId && item.quantity <= item.unitsInStock) {
      return {
        ...item,
        quantity: Number(event.target.value),
      };
    }

    return item;
  });

  setCartItems(updatedCartItems);
}

export function handleRemove({prevState, event, productId}) {
  const updatedCartItems = cartItems.filter((item) => item.id !== productId);

  setCartItems(updatedCartItems);
}

export function handleDownVote({prevState, event, productId}) {
  const updatedProducts = products.map((product) => {
    if (
      product.id === productId &&
      product.votes.downVotes.currentValue <
        product.votes.downVotes.lowerLimit
    ) {
      return {
        ...product,
        votes: {
          ...product.votes,
          downVotes: {
            ...product.votes.downVotes,
            currentValue: product.votes.downVotes.currentValue + 1,
          },
        },
      };
    }

    return product;
  });

  setProducts(updatedProducts);
}

export function handleUpVote({prevState, event, productId}) {
  const updatedProducts = products.map((product) => {
    if (
      product.id === productId &&
      product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit
    ) {
      return {
        ...product,
        votes: {
          ...product.votes,
          upVotes: {
            ...product.votes.upVotes,
            currentValue: product.votes.upVotes.currentValue + 1,
          },
        },
      };
    }

    return product;
  });

  setProducts(updatedProducts);
}

export function handleSetFavorite(productId) {
  const updatedProducts = products.map((product) => {
    if (product.id === productId) {
      return {
        ...product,
        isFavorite: !product.isFavorite,
      };
    }

    return product;
  });

  setProducts(updatedProducts);
}

export function saveNewProduct(newProduct) {
  setProducts((prevState) => [newProduct, ...prevState]);
}

export function handleDataFetch({prevState}) {
  api
  .getProducts()
  .then((data) => {
    // Set products state 
    return {
      ...prevState,
      products: data,
      hasError: null
    }
  })
  .catch((error) => {
    return {
      ...prevState,
      hasError: error
    }
  });
}

export function handleLoadingState({prevState, payload}) {
  return {...prevState, isLoading: payload}
}

export function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

export function Divider() {
  return <hr className="ItemCard__divider" />;
}

export function getPopularityClasses(
  currentValue,
  limit,
  prevClasses,
  popularityClassName,
) {
  const halfLimit = Math.floor(limit / 2);

  if (currentValue >= halfLimit) {
    return `${prevClasses} ${popularityClassName}`;
  }

  return prevClasses;
}