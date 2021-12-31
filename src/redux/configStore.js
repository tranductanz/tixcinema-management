import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmReducer } from './reducers/FilmReducer';
import { CinemaReducer } from './reducers/CinemaReducer';
import { UserManageReducer } from "./reducers/UserManageReducer";
import { TicketReducer } from "./reducers/TicketReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
const rootReducer = combineReducers({
    CarouselReducer,
    FilmReducer,
    CinemaReducer,
    UserManageReducer,
    TicketReducer,
    LoadingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;