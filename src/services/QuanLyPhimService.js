import { baseService } from './baseService';


export class QuanLyPhimService extends baseService {

    layDanhSachBanner = () => {
        return this.get('/api/QuanLyPhim/LayDanhSachBanner');
    }
}


export const quanLyPhimService = new QuanLyPhimService();

