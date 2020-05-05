import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoged, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLoged ? <Component {...props} /> : <Redirect to={"/login"} />
            }
        />
    );
};

export default PrivateRoute;
