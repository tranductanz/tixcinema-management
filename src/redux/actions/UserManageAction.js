import axios from "axios";
import { DOMAIN, GROUP_ID, TOKEN, TOKENCYBERSOFT } from "../../util/config";
import { NGUOI_DUNG_DANG_KY, NGUOI_DUNG_DANG_NHAP, SET_DANH_SACH_NGUOI_DUNG, SET_FULL_INFO_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG } from "./types/actionTypes";
import { history } from "../../App";
import swal from 'sweetalert';


export const dangNhapAction = (thongTinDangNhap) => {


    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: thongTinDangNhap,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            })
            if (result.data.statusCode === 200) {
                dispatch({
                    type: NGUOI_DUNG_DANG_NHAP,
                    thongTinDangNhap: result.data.content
                })

            }
            history.push('/admin');
        } catch (err) {
            const wrongAcc = { ...err }
            console.log(err.response?.data);
            alert(wrongAcc.response?.data.message)

        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
                method: 'POST',
                data: thongTinDangKy,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            })
            if (result.data.statusCode === 200) {
                dispatch({
                    type: NGUOI_DUNG_DANG_KY,
                    thongTinDangKy: result.data.content,
                })
                swal("Chúc mừng!", "Bạn đã đăng ký thành công!", "success");
            }
            console.log(result);
            history.goBack();
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
}


export const layThongTinNguoiDungAction = () => {


    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: 'POST',
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data?.content
                })
            }
            console.log(result);
        } catch (err) {
            console.log(err.response.data);
        }
    }
}


export const layFullInfoNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/LayThongTinNguoiDung`,
                method: 'POST',
                params: {
                    taiKhoan: taiKhoan,
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            dispatch({
                type: SET_FULL_INFO_NGUOI_DUNG,
                fullInfoNguoiDung: result.data.content,
            })

        } catch (err) {
            console.log(err.response?.data);
        }
    }
}


export const capNhatNguoiDungAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: 'PUT',
                data: thongTinNguoiDung,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            if (result.data.statusCode === 200) {
                alert('Cập nhật thành công');
                history.push('/admin/users');
                dispatch(layDanhSachListNguoiDungAction);
            }
            console.log({ result });
        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
}



export const layDanhSachListNguoiDungAction = (tuKhoa = '') => {
    return async dispatch => {
        if (tuKhoa.trim() != '') {
            try {
                const result = await axios({
                    url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung`,
                    method: 'GET',
                    params: {
                        MaNhom: GROUP_ID,
                        tuKhoa: tuKhoa,
                    },

                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                    }
                })
                console.log(result);
                if (result.data.statusCode === 200) {
                    dispatch({
                        type: SET_DANH_SACH_NGUOI_DUNG,
                        danhSachNguoiDung: result.data.content,
                    })
                }
            }
            catch (err) {
                console.log(err.response?.data);
            }
        }
        else {
            try {
                const result = await axios({
                    url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung`,
                    method: 'GET',
                    params: {
                        MaNhom: GROUP_ID
                    },
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT,
                    }
                })

                if (result.data.statusCode === 200) {
                    dispatch({
                        type: SET_DANH_SACH_NGUOI_DUNG,
                        danhSachNguoiDung: result.data.content,
                    })
                }
            }
            catch (err) {
                console.log(err.response?.data);
            }
        }

    }
}

export const xoaNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/XoaNguoiDung`,
                method: 'DELETE',
                params: {
                    TaiKhoan: taiKhoan
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            console.log({ result });
            if (result.data.statusCode === 200) {
                alert("Xoá User thành công");
                history.push('/admin/users')
                dispatch(layDanhSachListNguoiDungAction());
            }
        }
        catch (err) {
            const error = { ...err }
            // console.log(err.response?.data);
            alert(error.response?.data.content);
        }
    }
}