import { DAT_VE, NGUOI_DUNG_DAT_VE } from "../actions/types/actionTypes";
import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
const initialState = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
}

export const TicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case NGUOI_DUNG_DAT_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state }
        }
        case DAT_VE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if (index != -1) {
                // nếu có rồi thì xoá
                danhSachGheCapNhat.splice(index, 1)
            }
            else {
                danhSachGheCapNhat.push(action.gheDuocChon)
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
        }
        default:
            return { ...state };
    }
}