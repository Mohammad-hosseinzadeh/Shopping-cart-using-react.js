import React, { useReducer,createContext } from "react";


const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false,
};
const cartReaducer = (state, action) => {
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
            };
        //  Remove item
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
            };
        //  Incrase Item
        case "INCREASE":
            const indexI = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            };
        //  Decrease Item
        case "DECREASE":
            const indexD = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
            };
        // checkout
        case "CHECKOUT":
            return{
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: true,
            }
        // Clear
        case "CLEAR":
            return{
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: false,
            }

        default:
            return state;
    }
};

// CartContext
export const CartContext=createContext();

export default function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(cartReaducer, initialState);
    return (
        <CartContext.Provider value={{state,dispatch}}>
                {children}
        </CartContext.Provider>
    );
}
