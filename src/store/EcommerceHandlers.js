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
      dataFetch: {
        isLoading: false,
        hasError: false,
        loadingError: null
      }
    }
  })
  .catch((error) => {
    return {
      ...prevState,
      dataFetch: {
        isLoading: false,
        hasError: true,
        loadingError: error
      }
    }
  });
}