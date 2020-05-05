import { SET_LOGIN, CLEAR_USER, START_LOGIN } from "../actions/actiontypes";

const initalState = {
    isLoged: false,
};

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                isLoged: true,
                email: action.email,
            };
        case CLEAR_USER:
            return {
                isLoged: false,
            };
        default:
            return state;
    }
};

export default userReducer;
