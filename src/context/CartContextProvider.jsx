import React, { useReducer } from "react";

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

        default:
            return state;
    }
};
export default function CartContextProvider() {
    const [state, dispatch] = useReducer(cartReaducer, initialState);
    return <div>CartContextProvider</div>;
}
