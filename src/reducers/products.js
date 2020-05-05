import {
    SET_PRODUCTS,
    SET_EDIT_PRODUCT,
    CLEAR_UPDATE,
    SET_CREATING,
    CLEAR_CREATING,
} from "../actions/actiontypes";

const initialState = {
    data: [],
    edit: {},
    isCreating: false,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                data: [...action.products],
            };
        case SET_EDIT_PRODUCT:
            return {
                ...state,
                edit: {
                    item: action.item,
                },
            };
        case CLEAR_UPDATE:
            return {
                ...state,
                edit: {},
            };
        case SET_CREATING:
            return {
                ...state,
                isCreating: true,
            };
        case CLEAR_CREATING:
            return {
                ...state,
                isCreating: false,
            };
        default:
            return state;
    }
};

export default productsReducer;
