import React, { useEffect } from 'react'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../../../../src/assets/image/Logo.png';
import { history } from '../../../../App';
import { layThongTinNguoiDungAction } from '../../../../redux/actions/UserManageAction';
import { TOKEN } from '../../../../util/config';
const Header = (props) => {
    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
        alert("Đã đăng xuất thành công");
        window.location.reload();
    }





    const { userLogin } = useSelector(state => state.UserManageReducer);

    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img alt="LogoCinema" style={{ width: 80, height: 60, }} src={Logo}></img>
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink activeClassName="border-b-2 border-white text-red-500 " to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-600 ">Home</NavLink>
                    </li>

                    <li className="flex">
                        <NavLink style={{ textDecoration: 'none' }} activeClassName="border-b-2 border-white text-red-500" to="/admin" className="flex items-center px-4 text-white text-xl text-red-600 -mb-1 border-b-2 border-transparent hover:text-red-600">Đi đến trang ADMIN</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 lg:flex">

                    {userLogin && localStorage.getItem(TOKEN) !== null ? <Fragment> <div
                        className=" self-center px-8 py-3 rounded text-white hover:text-red-600"><NavLink className="text-red-500 hover:text-red-800" to="/profile"><button>{userLogin.hoTen}</button></NavLink></div>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </Fragment> : <Fragment>
                        <button onClick={() => {
                            history.push('/login')
                        }} className="self-center px-8 py-3 rounded text-white hover:text-red-600">Sign in</button>

                        <NavLink to="/register">
                            <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50 text-white hover:text-red-600">Sign up</button>
                        </NavLink>
                    </Fragment>}
                </div>
            </div>
        </header>

    )
}

export default Header;
