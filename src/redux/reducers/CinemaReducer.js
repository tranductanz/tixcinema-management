import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/actionTypes";

const initialState = {
    heThongRapChieu: []
}

export const CinemaReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_HE_THONG_RAP_CHIEU: {
            state.heThongRapChieu = action.heThongRapChieu
            return { ...state }
        }

        default:
            return { ...state };
    }
}