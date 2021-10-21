
import { buildNewCartItem } from "./generics";

export function handleChange({prevState, payload: {id:productId, event}}) {

  const updatedCartItems = prevState.cartItems.map((item) => {
    if (item.id === productId && item.quantity <= item.unitsInStock) {
      return {
        ...item,
        quantity: Number(event.target.value),
      };
    }

    return item;
  });

  return {...prevState, cartItems:updatedCartItems};
}
export function handleAddToCart({prevState, payload: productId}) {

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
export function handleRemove({prevState, payload:productId}) {

  const updatedCartItems = prevState.cartItems.filter((item) => item.id !== productId);

  return {...prevState, cartItems:updatedCartItems}
}
export function handleDownVote({prevState, payload:productId}) {
  const updatedProducts = prevState.products.map((product) => {
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

  return {...prevState, products:updatedProducts}
}

export function handleUpVote({prevState, payload:productId}) {
  const updatedProducts = prevState.products.map((product) => {
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

  return {...prevState, products:updatedProducts};
}

//*TODO fix FUCKING EVERYTHING !!!! ----- MANEJAR ERROR DE propiedades de objeto de prevstate--


export function handleSetFavorite({prevState, payload:productId}) {
  const updatedProducts = prevState.products.map((product) => {
    if (product.id === productId) {
      return {
        ...product,
        isFavorite: !product.isFavorite,
      };
    }

    return product;
  });


  return {...prevState, products:updatedProducts};
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


