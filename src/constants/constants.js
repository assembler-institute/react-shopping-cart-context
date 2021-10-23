const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

const actionTypes = {
	PRODUCT_DOWNVOTE: Symbol(),
	PRODUCT_UPVOTE: Symbol(),
	PRODUCT_SET_FAVORITE: Symbol(),
	PRODUCT_SAVE_NEW_PRODUCT: Symbol(),
	CARTITEM_ADD: Symbol(),
	CARTITEM_DELETE: Symbol(),
	CARTITEM_EDIT: Symbol(),
	LOADING_SUCCESS: Symbol(),
	LOADING_ERROR: Symbol(),
	CHECKOUT_PERSONAL_DETAILS: Symbol(),
	CHECKOUT_BILLING_DETAILS: Symbol(),
	CHECKOUT_PAYMENT_DETAILS: Symbol(),
	CHECKOUT_BACK: Symbol(),
	CHECKOUT_NEXT: Symbol(),
	CHECKOUT_ADD_COSTS: Symbol(),
};

const COUNTRY_TAXES_LIST = {
	ES: 0.21,
	FR: 0.2,
	DE: 0.19,
	CH: 0.077,
	UK: 0.2,
};

const COUNTRY_SHIPPING_LIST = {
	ES: 3,
	FR: 5,
	DE: 6,
	CH: 5,
	UK: 10,
};

const COUNTRY_PHONE_PREFIX_LIST = {
	ES: "+34",
	FR: "+33",
	DE: "+49",
	CH: "+41",
	UK: "+44",
};

const COUNTRY_NAME_LIST = {
	ES: "Spain",
	FR: "France",
	DE: "Germany",
	CH: "Switzerland",
	UK: "United Kingdom",
};

export {
	actionTypes,
	PRODUCTS_LOCAL_STORAGE_KEY,
	CART_ITEMS_LOCAL_STORAGE_KEY,
	COUNTRY_TAXES_LIST,
	COUNTRY_PHONE_PREFIX_LIST,
	COUNTRY_NAME_LIST,
	COUNTRY_SHIPPING_LIST,
};
