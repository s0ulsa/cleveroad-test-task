import { combineReducers } from "redux";
import userReducer from "./user";
import { reducer as formReducer } from "redux-form";
import productsReducer from "./products";

const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer,
    products: productsReducer,
});

export default rootReducer;
