import React, { Fragment, memo, useEffect, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './HomeMenu.css';
const { TabPane } = Tabs;



const HomeMenu = (props) => {



    const [state, setState] = useState({
        tabPosition: 'left',
    })

    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };

    const { heThongRapChieu } = props;

    const renderHeThongRap = () => {
        let { tabPosition } = state;
        return props.heThongRapChieu?.map((heThongRap, index) => {
            return <TabPane tab={<img src={heThongRap.logo} width="50" className="rounded-full" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap.map((cumRap, index) => {
                        return <TabPane
                            tab={
                                <div style={{ width: '300px', display: 'flex' }}>
                                    <img src="https://tieudung.vn/upload_images/images/2021/06/03/rap-chieu-phim.jpg" width="50" className="rounded-full" />
                                    <div className="text-left ml-2">
                                        {cumRap.tenCumRap}
                                        <p className="text-green-300 font-bold">Chi tiết</p>
                                    </div>
                                </div>
                            }
                            key={index}>

                            {/* Load Phim */}
                            {cumRap.danhSachPhim.map((phim, index) => {

                                return <Fragment key={index} >
                                    <div className="my-5">
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} />
                                            <div className="ml-2">
                                                <h1 className="font-bold  text-2xl">{phim.tenPhim}</h1>
                                                <p>{cumRap.diaChi}</p>
                                                <div className="grid grid-cols-6 gap-5">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {

                                                        return <NavLink className="text-2xl text-red-600" key={index} to="/">
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}

                                                        </NavLink>
                                                    })}
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>

            </TabPane>
        })
    }

    const { tabPosition } = state;
    return (
        <Fragment>
            <div>
                <Tabs className="tab-bar container" style={{
                    position: 'relative',

                }} tabPosition={tabPosition}>
                    {renderHeThongRap()}
                </Tabs>
            </div>
        </Fragment>
    )
}

export default memo(HomeMenu)
