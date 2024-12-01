export type Product = {
    id: number,
    name: string,
    url: string,
    price: number
}

export type State = Product[];

// ACTIONS
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const BUY = 'BUY';
const CLEAR_CART = 'CLEAR_CART';

type AddToCartAction = { type: typeof ADD_TO_CART, payload: Product }
type RemoveFromCartAction = { type: typeof REMOVE_FROM_CART, payload: number }
type BuyAction = { type: typeof BUY }
type ClearCartAction = { type: typeof CLEAR_CART }
type Action = AddToCartAction | RemoveFromCartAction | BuyAction | ClearCartAction;

// REDUCER
export const shopCart = (state: State = [], action: Action) => {
    switch (action.type) {
        case BUY:
            return state;
        case CLEAR_CART:
            return [];
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.payload)
        default:
            return state;
    }
}

// ACTION CREATORS
export const createAddAction = (product: Product): AddToCartAction => ({ type: ADD_TO_CART, payload: product });
export const createRemoveAction = (productId: number): RemoveFromCartAction => ({ type: REMOVE_FROM_CART, payload: productId });
export const createBuyAction = (): BuyAction => ({ type: BUY });
export const createClearCartAction = (): ClearCartAction => ({ type: CLEAR_CART });