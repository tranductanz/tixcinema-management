import React from 'react'
import { memo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, TicketAction } from '../../redux/actions/TicketAction';
import styles from './Checkout.module.css'
import './Checkout.css'
import { CheckOutlined, CloseSquareOutlined, UserOutlined } from '@ant-design/icons';
import { DAT_VE } from '../../redux/actions/types/actionTypes';
import _ from 'lodash';
import { ThongTinDatVe, ThongTinNguoiDung } from '../../_core/models/ThongTinDatVe';
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/UserManageAction';
import moment from 'moment';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
function Checkout(props) {


    const { userLogin } = useSelector(state => state.UserManageReducer);

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.TicketReducer);


    const dispatch = useDispatch();
    useEffect(() => {
        const action = TicketAction(props.match.params.id);
        dispatch(action);
    }, [])


    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;


    const renderSeats = () => {

        return danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';

            let classGheDangDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)


            let classGheDaDuocDat = '';
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat';
            }

            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat';
            }


            return <button
                onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe,

                    })
                }}
                disabled={ghe.daDat}
                className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
                key={index}>
                {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined /> : <CloseSquareOutlined style={{ marginBottom: 7.5 }} /> : ghe.stt}
            </button>
        })
    }

    return (
        <div className=" min-h-screen mt-5">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5">

                        <div className="bg-black" style={{ width: '80%', height: 15 }}>

                        </div>


                        <div className={`${styles['trapezoid']} text-center`}>
                            <h3 className="mt-3 text-black">Màn hình</h3>
                        </div>
                        <div>
                            {renderSeats()}
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <table className="divide-y divide-gray-200 w-2/3">
                            <thead className="bg-gray-50 p-5">
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế đã đặt</th>
                                    <th>Ghế vip</th>
                                    <th>Ghế bạn đặt</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="text-center">
                                    <td><button className="ghe text-center"><CheckOutlined /></button></td>
                                    <td><button className="ghe gheDangDat text-center"><CheckOutlined /></button></td>
                                    <td><button className="ghe gheDaDat text-center"><CloseSquareOutlined /></button></td>
                                    <td><button className="ghe gheVip text-center"><CheckOutlined /></button></td>
                                    <td><button className="ghe gheDaDuocDat text-center"><UserOutlined /></button></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
                <div className="col-span-3">
                    <h3 className="text-green-400 text-center text-4xl">
                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe?.giaVe;
                        }, 0).toLocaleString()} đ
                    </h3>
                    <hr />
                    <h3 className="text-xl mt-2">{thongTinPhim.tenPhim}</h3>
                    <p>Địa điểm {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
                    <p>Ngày chiếu : {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Ghế</span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className="text-green-500 text-xl">
                                    {gheDD.stt}
                                </span>
                            })}
                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <div className="my-5">
                        <i>Phone</i> <br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <div style={{ marginBottom: 0 }} className="mb-0 flex flex-col justify-end items-center">
                        <div
                            onClick={() => {
                                const thongTinDatVe = new ThongTinDatVe();
                                thongTinDatVe.maLichChieu = props.match.params.id;
                                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                                dispatch(datVeAction(thongTinDatVe));
                            }}
                            className="bg-green-500 cursor-pointer text-white w-full text-center py-3 font-bold text-2xl">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export const Checkout


export default function (props) {
    return <div className="p-5">
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="01. Chọn ghế và thanh toán" key="1">
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02. Kết quả đặt vé" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>

        </Tabs>
    </div>

}



function KetQuaDatVe(props) {
    const dispatch = useDispatch();
    const { thongTinNguoiDung } = useSelector(state => state.UserManageReducer);


    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action);
    }, [])

    const renderTicketItem = () => {

        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe);
            return <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-extrabold text-xl">{ticket.tenPhim}</h2>
                        <p className="text-red-500 font-bold">{moment(ticket.ngayDat).format('hh:mm A - DD - MM - YYYY')}</p>
                        <p className="text-red-500 font-bold">Địa điểm : {seats.tenHeThongRap} - {seats.tenCumRap}</p>
                        {ticket.danhSachGhe.map((ghe, index) => {
                            return <div key={index} className="grid grid-cols-2">
                                Ghế bạn đặt : {ghe.tenGhe}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        })
    }

    return <div className="p-5">
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-red-500">Lịch sử đặt vé khách hàng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Mời bạn kiểm tra lại thông tin</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderTicketItem()}
                </div>
            </div>
        </section>

    </div>
}