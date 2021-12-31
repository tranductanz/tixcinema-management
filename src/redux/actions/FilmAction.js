import axios from "axios";
import { history } from "../../App";
import { DOMAIN, TOKEN, TOKENCYBERSOFT } from "../../util/config";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM_CHINH_SUA } from "./types/actionTypes";



// https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=black
export const layDanhSachPhimAction = (tenPhim = '') => {
    return async (dispatch) => {
        // Tìm phim
        if (tenPhim.trim() != '') {
            try {
                const result = await axios({
                    url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim`,
                    method: 'GET',
                    params: {
                        maNhom: "GP01",
                        tenPhim: tenPhim,
                    },
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT
                    }
                });

                dispatch({
                    type: SET_DANH_SACH_PHIM,
                    arrFilm: result.data.content,
                })
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const result = await axios({
                    url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim`,
                    method: 'GET',
                    params: {
                        maNhom: "GP01",
                    },
                    headers: {
                        TokenCybersoft: TOKENCYBERSOFT
                    }
                });

                dispatch({
                    type: SET_DANH_SACH_PHIM,
                    arrFilm: result.data.content,
                })
            } catch (err) {
                console.log(err);
            }
        }

    }
}

export const themPhimUploadHinhAction = (formData) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
                method: "POST",
                data: formData,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            })
            alert('Thêm phim thành công');

        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
}


export const layThongTinPhimChinhSuaAction = (maPhim) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayThongTinPhim`,
                method: "GET",
                params: {
                    MaPhim: maPhim,
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                },
            })
            dispatch({
                type: SET_THONG_TIN_PHIM_CHINH_SUA,
                thongTinPhimChinhSua: result.data.content
            })
        }
        catch (err) {
            console.log(err.response?.data)
        };
    }
}


export const capNhatPhimAction = (formData) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/CapNhatPhimUpload`,
                method: "POST",
                data: formData,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            alert('Cập nhật Phim thành công')

            dispatch(layDanhSachPhimAction());
            history.push('/admin/films');

        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
}


export const xoaPhimAction = (maPhim) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/XoaPhim`,
                method: 'DELETE',
                params: {
                    MaPhim: maPhim
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            console.log(result.data.content);
            alert("Xoá phim thành công");
            dispatch(layDanhSachPhimAction());

        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
}