import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { Suspense, lazy } from 'react';
import LazyLoading from './templates/CheckoutTemplate/LazyLoading';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import { Dashboard } from './pages/Admin/Dashboard/Dashboard';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import AddNewFilm from './pages/Admin/Films/AddNew/AddNewFilm';
import EditFilm from './pages/Admin/Films/Edit/EditFilm';
import Profile from './pages/Profile/Profile';
import EditProFile from './pages/Profile/EditProfile/EditProFile';
import Users from './pages/Admin/User/User';
import AddUser from './pages/Admin/User/AddUser/AddUser';
import EditUser from './pages/Admin/User/EditUser/EditUser';


const CheckoutTemplateLazyLoading = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'));
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <UserTemplate path="/profile/edit/:id" Component={EditProFile} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={Showtime} />
        {/* <AdminTemplate path="/admin/films/showtime/:id" Component={Showtime} /> */}
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNewFilm} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={EditFilm} />
        <AdminTemplate path="/admin/films" Component={Films} />

        <AdminTemplate path="/admin/users/edit/:taiKhoan" exact Component={EditUser} />
        <AdminTemplate path="/admin/users/addnew" exact Component={AddUser} />
        <AdminTemplate path="/admin/users" exact Component={Users} />
        <AdminTemplate path="/admin" exact Component={Users} />
        <CheckoutTemplate path="/profile" Component={Profile} />
        <HomeTemplate path="/contact" Component={Contact} />
        <HomeTemplate path="/news" Component={News} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <UserTemplate path="/register" exact Component={Register} />


        <UserTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/" exact Component={Home} />
        <Suspense fallback={
          <LazyLoading />
        }>
          <CheckoutTemplateLazyLoading path="/checkout/:id" exact Component={Checkout} />
        </Suspense>


      </Switch>

    </Router>
  );
}

export default App;
