import React from 'react'
import { TraceSpinner } from "react-spinners-kit";
import logoBrand from '../../assets/image/Logo.png'
import './LazyLoading.css'
function LazyLoading() {
    const state = {
        loading: true,
    };
    const { loading } = state;

    return (
        <div className="background">
            <div className="grid justify-center items-center mt-64 ">
                <img src={logoBrand} style={{ width: 150, height: 150 }} />
                <TraceSpinner size={150} color="#686769" loading={loading}></TraceSpinner>
            </div>
        </div>
    )
}

export default LazyLoading
