import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

const Nav = ({ logOut, isLoged }) => {
    let history = useHistory();

    const handleLogOut = (e) => {
        e.preventDefault();
        logOut();
        history.push("/login");
    };

    const handleToCreate = () => {
        history.push("/create");
    };

    const handleToProducts = () => {
        history.push("/products");
    };

    return isLoged ? (
        <div className="logout-box">
            <a href="#" onClick={handleLogOut}>
                Logout
            </a>
            <a href="#" onClick={handleToCreate}>
                Create new product
            </a>
            <a href="#" onClick={handleToProducts}>
                Product list
            </a>
        </div>
    ) : null;
};

export default Nav;
