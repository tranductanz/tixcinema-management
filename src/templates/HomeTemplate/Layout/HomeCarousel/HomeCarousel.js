import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd';
import axios from 'axios';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat'
};
const HomeCarousel = (props) => {

  const dispatch = useDispatch();
  const { arrImg } = useSelector((state) => {
    return state.CarouselReducer;
  });
  // const result = await axios({
  //   url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
  //   method: 'GET',
  //   headers: {
  //     TokenCybersoft: TokenCybersoft
  //   }
  // })

  useEffect(() => {
    dispatch(getCarouselAction());
  }, [])



  const renderImg = () => {
    return arrImg.map((item, index) => {
      return <div key={index}>
        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
          <img className="w-full opacity-0" src={item.hinhAnh} alt={item.hinhAnh} />
        </div>
      </div>

    })
  }

  return (
    <Carousel className="test" effect="fade">
      {renderImg()}
    </Carousel>
  )
}

export default HomeCarousel
