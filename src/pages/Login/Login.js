import React from 'react'
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import LogoBrand from '../../assets/image/Logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from '../../redux/actions/UserManageAction';
const Login = (props) => {

    const { userLogin } = useSelector(state => state.UserManageReducer);


    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },

        onSubmit: values => {
            console.log('value', values);
            const action = dangNhapAction(values);
            dispatch(action);

        }
    })

    const dispatch = useDispatch();
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit(event);
        }} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <NavLink to="/">
                            <img src={LogoBrand} style={{ width: 150 }} />
                        </NavLink>
                    </div>
                    <div className="text-xl text-red-500 tracking-wide ml-2 font-semibold">Cinema</div>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-red-500 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Thông tin đăng nhập</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                            <input name="taiKhoan" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="Nhập tài khoản" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật Khẩu
                                </div>
                                <div>
                                    <NavLink to="/register" className="text-xs font-display font-semibold text-red-500 hover:text-indigo-800
                                  cursor-pointer">
                                        Quên mật khẩu?
                                    </NavLink>
                                </div>
                            </div>
                            <input type="password" name="matKhau" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập mật khẩu" />
                        </div>
                        <div className="mt-10">
                            <button type='submit' className="bg-red-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:text-yellow-300
                          shadow-lg">
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Chưa có tài khoản? <NavLink to="/register" className="cursor-pointer text-red-500 hover:text-indigo-800">Đăng ký</NavLink>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login
