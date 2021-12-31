import { Box } from '@mui/system';
import React, { Fragment } from 'react'
import { Route } from 'react-router';
import FooterPage from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel';

export const HomeTemplate = (props) => {
    // tra ve path, exact, Component
    //HOC
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        //props.location,
        //props.history,
        //props.match,
        return <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <FooterPage {...propsRoute} />
        </Fragment>
    }} />
}

