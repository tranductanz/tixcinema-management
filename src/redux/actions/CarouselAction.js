import axios from "axios";
import { DOMAIN, TOKENCYBERSOFT } from "../../util/config";
import { SET_CAROUSEL } from "./types/actionTypes";



export const getCarouselAction = () => {
    return async (dispatch) => {

        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
                method: 'GET',
                headers: {
                    TokenCybersoft: TOKENCYBERSOFT
                }
            });
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content,
            })
        } catch (err) {
            console.log(err);
        }
    }
}
