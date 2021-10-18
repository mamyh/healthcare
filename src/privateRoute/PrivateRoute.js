import React from 'react'
import { Redirect, Route, useRouteMatch } from 'react-router'

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{ pathname: '/login', state: { from: location } }}></Redirect>}
        >
        </Route>
    )
}

export default PrivateRoute;
