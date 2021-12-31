import React, { Fragment } from 'react'
import { Route } from 'react-router'

function TestTemplate(props) {

    const { Component, restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <div>
                Hello
            </div>
        </Fragment>
    }} />
}

export default TestTemplate
