import { createSelector } from "reselect";
import { State } from "../store";

export const shopCartSelector = (state: State) => state.shopCart;

export const totalPriceSelector = createSelector(
    shopCartSelector,
    (products) => products.reduce((acc, product) => acc + product.price, 0)
);

export const isProductInCartSelector = (productId: number) => createSelector(
    shopCartSelector,
    (products) => products.map(product => product.id).includes(productId)
);
