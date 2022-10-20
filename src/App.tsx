import React from 'react';
import './App.css';
import {userSlice} from "./store/reducers/UserSlice";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import {Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from "./components/UI/Navbar/Navbar";
import {adminRoutes, codeveloperRoutes, developerRoutes, doctorRoutes, expertRoutes, regisRoutes} from "./router";
// нужно импортнуть стриницы
const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Navbar />}>
    if (Role==1) {
    developerRoutes.map(route =>
        <Route
            element={route.element}
            path={route.path}
            key={route.path}
        />
    )

}
    if (Role==2) {
    codeveloperRoutes.map(route =>
        <Route
            element={route.element}
            path={route.path}
            key={route.path}
        />
    )

}
    if (Role==3) {
    adminRoutes.map(route =>
        <Route
            element={route.element}
            path={route.path}
            key={route.path}
        />
    )

}
    if (Role==4) {
    doctorRoutes.map(route =>
        <Route
            element={route.element}
            path={route.path}
            key={route.path}
        />
    )

}
    if (Role==5) {
    regisRoutes.map(route =>
        <Route
            element={route.element}
            path={route.path}
            key={route.path}
        />
    )

}
    if (Role==6) {
    expertRoutes.map(route =>
        <Route
            element={route.element}
            path={route.path}
            key={route.path}
        />
    )

}

</Route>))

function App() {
    // const dispatch = useAppDispatch()
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer) // достаем переменные из хранилища
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [ ])
    {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
    {/*{error && <h1>{error}</h1>}*/}
    {/*{JSON.stringify(users, null, 2)}*/}
    return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
