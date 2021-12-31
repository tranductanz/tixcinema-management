import axios from "axios";
import { DOMAIN, TOKEN, TOKENCYBERSOFT } from "../../util/config";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { DISPLAY_LOADING_ACTION, HIDE_LOADING_ACTION } from "./LoadingAction";
import { DAT_VE, NGUOI_DUNG_DAT_VE } from "./types/actionTypes";
import swal from 'sweetalert';





export const TicketAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe`,
                method: 'GET',
                params: {
                    MaLichChieu: maLichChieu
                },
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }

            })
            console.log(result);
            if (result.status === 200) {
                dispatch({
                    type: NGUOI_DUNG_DAT_VE,
                    chiTietPhongVe: result.data.content
                })
            }

        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {

            const result = await axios({
                url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: thongTinDatVe,
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT,
                    Authorization: "Bearer " + localStorage.getItem(TOKEN),
                }
            })
            dispatch(TicketAction(thongTinDatVe.maLichChieu))
            swal("Chúc mừng!", "Bạn đã đặt vé thành công!", "success");
            console.log(result);
            // if (result.status === 200) {
            dispatch({
                type: DAT_VE,
                datVe: result.data.content,
            })
            // }



        }
        catch (err) {
            console.log(err);
        }
    }
}