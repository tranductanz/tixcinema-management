import { Axios } from "axios"
import { DOMAIN, TOKENCYBERSOFT } from "../util/config"


export class baseService {
    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                TokenCybersoft: TOKENCYBERSOFT,
            }
        })
    }
}