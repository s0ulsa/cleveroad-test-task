import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";
import { useHistory } from "react-router-dom";
import "./style.scss";

const Login = ({ isLoged, logIn }) => {
    let history = useHistory();

    const handleSubmit = ({ email, password }) => {
        logIn(email, password.toString());
    };

    return isLoged ? (
        <Redirect to={"/products"} />
    ) : (
        <div className="login-box">
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Login;
