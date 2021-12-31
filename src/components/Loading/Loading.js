import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TraceSpinner } from 'react-spinners-kit'
import logoBrand from '../../assets/image/Logo.png'

function Loading(props) {




    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.LoadingReducer);



    return (
        <Fragment>
            {isLoading ? <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.8)',
                display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99
            }}>
                <div className="text-4xl">
                    <img className="mb-10" src={logoBrand} style={{ width: 150, height: 150 }} />
                    {/* <TraceSpinner size={150} color="#686769" loading={isLoading}></TraceSpinner> */}
                    <h1>LOADING....</h1>
                </div>
            </div> : ''}
        </Fragment>
    )
}

export default Loading
