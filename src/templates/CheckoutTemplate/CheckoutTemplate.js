import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router';
import { USER_LOGIN } from '../../util/config';

const CheckoutTemplate = (props) => {
    // tra ve path, exact, Component
    //HOC
    const { Component, ...restProps } = props;

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />
    }

    return <Route {...restProps} render={(propsRoute) => {
        //props.location,
        //props.history,
        //props.match,
        return <Fragment>

            <Component {...propsRoute} />
        </Fragment>
    }} />
}

export default CheckoutTemplate;