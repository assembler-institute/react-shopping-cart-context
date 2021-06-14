import * as routes from "../constants/routes";

const orderRoutes = [
  routes.AUTH,
  routes.DETAIL,
  routes.ADDRESS,
  routes.PAYMENT,
  routes.SUMMARY,
];

export function getPageIndex(page) {
  return orderRoutes.findIndex((_page) => page === _page);
}

export function getFirsCheckoutPage() {
  return orderRoutes[0];
}

export const skipRoutes = false;
