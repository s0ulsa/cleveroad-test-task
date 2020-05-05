import React from "react";
import { reduxForm, Field } from "redux-form";
import "./style.scss";

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form__field email-field">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" component="input" />
            </div>
            <div className="login-form__field password-field">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" component="input" />
            </div>
            <div className="submit-field">
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "login",
})(LoginForm);
