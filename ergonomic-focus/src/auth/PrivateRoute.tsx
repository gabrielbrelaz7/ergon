import {useContext} from "react";
import {Redirect, Route} from "react-router";
import App from "../App";
import {AuthContext} from "../Contexts/AuthContext";

export const PrivateRoute = () => {

    const {component:RouteComponent, <App />} = props: any ;

    const {username} = useContext(AuthContext);

    return (

        <Route
            {...other}
            render
            {(routeProps) =>
            !!username ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to='/login' />
            )
        }/>
    );
};