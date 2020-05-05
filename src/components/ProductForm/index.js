import React from "react";
import { reduxForm, Field } from "redux-form";
import "./style.scss";

const validate = (values) => {
    let errors = {};
    if (!values.title) {
        errors.title = "Required";
    } else if (values.title.length < 20) {
        errors.title = "Should be > 20 chars";
    } else if (values.title.length > 60) {
        errors.title = "Should be < 60 chars";
    }
    if (values.desription > 200) {
        errors.title = "Should be < 200 chars";
    }
    if (!values.price) {
        errors.price = "Required";
    } else if (values.price <= 0) {
        errors.price = "Should be > 0 and < 99999999.99";
    }
    if (values.discount <= 10 || values.discount >= 90) {
        errors.discount = "Should be between 10 and 90";
    }
    if (Date.parse(values.date) <= Date.now()) {
        errors.date = "Shold not early then tommorow";
    } else if (values.discount && !values.date) {
        errors.date = "Required";
    }
    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className={`input-el-box ${label.toLowerCase()}`}>
        <div className="field-box">
            <label>{label}</label>
            <input {...input} type={type} />
        </div>
        {touched && error && <span className="error">{error}</span>}
    </div>
);

const ProductForm = (props) => {
    const { handleSubmit, action } = props;
    return (
        <form onSubmit={handleSubmit} className="create-form">
            <Field
                name="title"
                type="text"
                component={renderField}
                label="Title"
            />
            <Field
                name="description"
                type="text"
                component={renderField}
                label="Description"
            />
            <Field
                name="price"
                type="number"
                component={renderField}
                label="Price in $"
            />
            <Field
                name="discount"
                type="number"
                component={renderField}
                label="Discount in %"
            />
            <Field
                name="date"
                type="date"
                component={renderField}
                label="Date"
            />
            <div className="submit-field">
                <button>{action}</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "productForm",
    validate,
})(ProductForm);
