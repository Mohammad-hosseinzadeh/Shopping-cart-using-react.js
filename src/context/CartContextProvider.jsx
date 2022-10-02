import React, { useReducer, createContext } from "react";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false,
};

// itemsCounter and total
const sumItems = (items) => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.quantity * product.price,0).toFixed(2);
    return { itemsCounter, total };
};
const cartReaducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        // Add Item
        case "ADD_ITEM":
            if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkOut: false,
            };
        //  Remove item
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(state.selectedItems),
            
            };
        //  Incrase Item
        case "INCREASE":
            const indexI = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            };
        //  Decrease Item
        case "DECREASE":
            const indexD = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            };
        // checkout
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: true,
            };
        // Clear
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: false,
            };

        default:
            return state;
    }
};

// CartContext
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(cartReaducer, initialState);
    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}
