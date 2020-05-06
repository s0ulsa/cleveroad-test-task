import { db, storage } from "../firebase";
import {
    SET_PRODUCTS,
    SET_EDIT_PRODUCT,
    CLEAR_UPDATE,
    SET_CREATING,
    CLEAR_CREATING,
} from "./actiontypes";

export const setProducts = (data) => {
    return {
        type: SET_PRODUCTS,
        products: data,
    };
};

export const setEdit = (item) => ({
    type: SET_EDIT_PRODUCT,
    item: item,
});

export const clearUpdate = () => ({
    type: CLEAR_UPDATE,
});

export const setCreating = () => ({
    type: SET_CREATING,
});

export const clearCreating = () => ({
    type: CLEAR_CREATING,
});

export const getProducts = () => {
    return function (dispatch) {
        db.collection("items")
            .get()
            .then((response) => {
                const data = response.docs.map((doc) => doc.data());
                return dispatch(setProducts(data));
            })
            .catch((error) => alert(error));
    };
};

export const createProduct = (values, img, history) => {
    const productId = `${new Date().valueOf()}`;
    return function (dispatch) {
        storage
            .ref(`/images/${productId}`)
            .put(img)
            .then(() => dispatch(setCreating()))
            .then(() => {
                db.collection("items")
                    .doc(productId)
                    .set({ ...values, id: productId })
                    .then(() => {
                        history.push("/products");
                    })
                    .catch((error) => alert(error));
                return dispatch(setCreating());
            })
            .catch((error) => alert(error));
    };
};

export const isDiscountActive = (date) =>
    Date.parse(date) >= Date.now() ? true : false;

export const calculatePrice = (price, discount) => {
    return price - (price * discount) / 100;
};

export const updateProduct = (item) => {
    return function (dispatch) {
        db.collection("items")
            .doc(item.id)
            .set({ ...item })
            .then(() => dispatch(clearUpdate()))
            .catch((error) => alert(error));
    };
};
