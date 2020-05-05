import React from "react";
import EditForm from "../../containers/EditForm";
import { Redirect } from "react-router-dom";
import "./style.scss";

//тут просто использую форму для создания продукта и
//подключаю ей начальные значения полей редактируемого продукта

const EditComponent = ({ updateProduct, product }) => {
    const handleSubmit = (values) => {
        updateProduct({ ...values, ...product });
    };

    return product.item ? (
        <div className="edit">
            <EditForm action={"Update changes"} onSubmit={handleSubmit} />
        </div>
    ) : (
        <Redirect to={"/products"} />
    );
};

export default EditComponent;
