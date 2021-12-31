import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from './MultipleRowSlick.module.css';
import { Button } from 'antd';
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/actionTypes";
import { useDispatch, useSelector } from "react-redux";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-next']}`}
            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        />
    );
}



const MultipleRows = (props) => {
    const { dangChieu, sapChieu } = useSelector(state => state.FilmReducer);

    let activeClassDangChieu = dangChieu === true ? 'active_Film' : 'none_active_Film'
    let activeClassSapChieu = sapChieu === true ? 'active_Film' : 'none_active_Film'

    const dispatch = useDispatch();
    const renderFilms = () => {
        return props.arrFilm?.slice(0, 12).map((item, index) => {
            return <div className={`${styleSlick['width-item']} mt-2 sm:${styleSlick['width-item']}`} key={index}>
                {/* <Film phim={item} /> */}
                <Film_Flip phim={item} />
            </div>
        })
    }

    const settings = {
        className: "center slider variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "150px",
        slidesToShow: 2.5,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        // variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        mobileFirst: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: "0x",
                rows: 2,
            }
        }]
    }
    return (
        <div className="container" >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }}>
                <button
                    style={{ borderRadius: 35, borderWidth: 3, borderColor: 'black' }}
                    onClick={() => {
                        const action = { type: SET_FILM_DANG_CHIEU }
                        dispatch(action);
                    }}
                    className={`px-8 py-3 font-semibold rounded mr-5 ${styleSlick[activeClassDangChieu]}`}
                >PHIM ĐANG CHIẾU</button>
                <button
                    className={`px-8 py-3 font-semibold rounded mr-5 ${styleSlick[activeClassSapChieu]}`}
                    onClick={() => {
                        const action = { type: SET_FILM_SAP_CHIEU }
                        dispatch(action);
                    }}
                    style={{ borderRadius: 35, borderWidth: 3, borderColor: 'black' }}>PHIM SẮP CHIẾU</button>
            </div>
            <Slider {...settings}>
                {renderFilms()}


            </Slider>
        </div >
    );

}

export default MultipleRows