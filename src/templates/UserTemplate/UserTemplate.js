import React, { Fragment } from 'react'
import { Route } from 'react-router';
import LogoBrand from '../../assets/image/Logo.png'

export const UserTemplate = (props) => {
    // tra ve path, exact, Component
    //HOC
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        //props.location,
        //props.history,
        //props.match,
        return <Fragment>
            <div className="lg:flex">
                <Component {...propsRoute} />
                <div className="hidden lg:flex items-center justify-center bg-red-200 flex-1 h-screen">
                    <img src={LogoBrand} />s
                </div>
            </div>

        </Fragment>
    }} />
}

