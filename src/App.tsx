import React from 'react';
import './App.css';
import {userSlice} from "./store/reducers/UserSlice";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import {Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
// нужно импортнуть стриницы
let router:any;
function App() {
    const Role: number=1

    switch (Role) {
        case 1: {
            router = createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<Navbar/>}>
                    <Route
                        element={<LoginForm/>}
                        path="/login"
                    />
                    <Route path="*" element={<Notfoundpage/>} />
                </Route>))
            break;
        }
        case 2:
        {
            router = createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<Navbar/>}>
                    <Route
                        element={<LoginForm/>}
                        path="/login"
                    />
                </Route>))
            break;
        }
        case 3: {
            router = createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<Navbar/>}>
                    <Route
                        element={<LoginForm/>}
                        path="/login"
                    />
                </Route>))
            break;
        }
        case 4: {
           router = createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<Navbar/>}>
                    <Route
                        element={<LoginForm/>}
                        path="/login"
                    />
                </Route>))
            break;
        }
        case 5: {
            router = createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<Navbar/>}>
                    <Route
                        element={<LoginForm/>}
                        path="/login"
                    />
                </Route>))
            break;
        }
        default: {
            router = createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<Navbar/>}>
                    <Route
                        element={<NotFoundPage/>}
                        path="/login"
                    />
                </Route>))
            break;
        }
    }

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
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
