const ADD_PRODUCT = 'scandiweb-challenge/cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'scandiweb-challenge/cart/REMOVE_PRODUCT';
const INCREASE_PRODUCT_QUANTITY = 'scandiweb-challenge/cart/INCREASE_PRODUCT_QUANTITY';
const DECREASE_PRODUCT_QUANTITY = 'scandiweb-challenge/cart/DECREASE_PRODUCT_QUANTITY';

const initialState = { cartItems: [] };

export const addProduct = (cartItem) => ({
    type: ADD_PRODUCT,
    payload: cartItem,
});


export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    payload: id,
});

export const increaseProductQuantity = (id) => ({
    type: INCREASE_PRODUCT_QUANTITY,
    payload: id,
});

export const decreaseProductQuantity = (id) => ({
    type: DECREASE_PRODUCT_QUANTITY,
    payload: id,
});

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        case INCREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                }),

            };
        case DECREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                }),
            };

        default:
            return state;
    }
}

export default cartReducer;