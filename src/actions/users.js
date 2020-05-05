import { SET_LOGIN, CLEAR_USER } from "./actiontypes";
import { auth } from "../firebase";

export const setLogin = (user) => {
    return {
        type: SET_LOGIN,
        email: user.email,
    };
};

export const clearUser = () => {
    return {
        type: CLEAR_USER,
    };
};

export const logIn = (email, password) => {
    return function (dispatch) {
        auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                dispatch(setLogin(response.user));
            })
            .catch((error) => alert(error.message));
    };
};

export const logOut = () => {
    return function (dispatch) {
        auth.signOut().then(() => dispatch(clearUser()));
    };
};
