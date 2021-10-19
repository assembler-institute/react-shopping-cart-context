import products from "../utils/demo-data";

import { handleResponse } from "../utils/handle-response";
import useLocalStorage from "../hooks/useLocalStorage";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

async function getProducts(fail = false) {
  return await new Promise(async (res, rej) => {
    setTimeout(() => {
      if (fail) {
        return rej(handleResponse({
          hasError: true,
          error: "Failed to fetch"
        }));
      }
      return res(handleResponse({
        data: products
      }));
    }, 1000);

    return res;
  });
}

async function postProduct(NewProduct, fail = false) {


  return await new Promise(async (res, rej) => {
    setTimeout(() => {
      if (fail) {
        return rej(handleResponse({
          hasError: true,
          error: "Failed to fetch"
        }));
      }

      products.push(NewProduct)

      return res(handleResponse({
        data: products
      }));
    }, 1000);
  })
}

export {
  getProducts,
  postProduct
};
