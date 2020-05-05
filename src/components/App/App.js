import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../../containers/Login";
import Nav from "../../containers/Nav";
import ProductList from "../../containers/ProductList";
import ProductCreator from "../../containers/ProductCreator";
import EditComponent from "../../containers/EditComponent";
import PrivateRoute from "../../containers/PrivatRouter";
import { auth } from "../../firebase";
import "./style.scss";

// логин cleveroad@gmail.com и пароль clever67

const App = ({ setLogin }) => {
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogin(user);
            }
        });
    }, [setLogin]);

    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path={"/login"} component={Login} />
                <PrivateRoute
                    exact
                    component={ProductList}
                    path={"/products"}
                />
                <PrivateRoute
                    exact
                    component={ProductCreator}
                    path={"/create"}
                />
                <Route exact path={"/edit"} component={EditComponent} />
            </Switch>
        </Router>
    );
};

export default App;
