import React from 'react';
import './App.css';
import {userSlice} from "./store/reducers/UserSlice";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUser} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import {Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
import NotFoundPage from "./components/NotFoundPage";
import Root from "./components/UI/Root";
import {RequireAuth} from "./components/hoc/RequireAuth";
import LoginPage from "./components/LoginPage";
// нужно импортнуть стриницы
let router:any;
function App() {
    const Role: number=1

    switch (Role) {
        case 1: {
            router = createBrowserRouter(createRoutesFromElements
                (
                    <Route path="/" element={<Root/>}>

                            <Route
                                element={<LoginPage/>}
                                path="/login"
                            />
                        <Route path="/menu" element={<Navbar/>}>
                            <Route
                                element={
                                <RequireAuth>
                                    <PostContainer/>
                                </RequireAuth>}
                                    path="/posts"
                                    />
                            <Route path="*" element={<NotFoundPage/>} />
                        </Route>
                    </Route>
                )
            )
            break;
        }
        case 2:
        {
            router = createBrowserRouter(createRoutesFromElements
            (
                <Route path="/" element={<Root/>}>

                    <Route
                        element={<LoginPage/>}
                        path="/login"
                    />
                    <Route path="/menu" element={<Navbar/>}>
                        <Route
                            element={
                                <RequireAuth>
                                    <PostContainer/>
                                </RequireAuth>}
                            path="/posts"
                        />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Route>
                </Route>
            )
            )
            break;
        }
        case 3: {
            router = createBrowserRouter(createRoutesFromElements
            (
                <Route path="/" element={<Root/>}>

                    <Route
                        element={<LoginPage/>}
                        path="/login"
                    />
                    <Route path="/menu" element={<Navbar/>}>
                        <Route
                            element={
                                <RequireAuth>
                                    <PostContainer/>
                                </RequireAuth>}
                            path="/posts"
                        />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Route>
                </Route>
            ))
            break;
        }
        case 4: {
           router = createBrowserRouter(createRoutesFromElements
           (
               <Route path="/" element={<Root/>}>

                   <Route
                       element={<LoginPage/>}
                       path="/login"
                   />
                   <Route path="/menu" element={<Navbar/>}>
                       <Route
                           element={
                               <RequireAuth>
                                   <PostContainer/>
                               </RequireAuth>}
                           path="/posts"
                       />
                       <Route path="*" element={<NotFoundPage/>} />
                   </Route>
               </Route>
           ))
            break;
        }
        case 5: {
            router = createBrowserRouter(createRoutesFromElements
            (
                <Route path="/" element={<Root/>}>

                    <Route
                        element={<LoginPage/>}
                        path="/login"
                    />
                    <Route path="/menu" element={<Navbar/>}>
                        <Route
                            element={
                                <RequireAuth>
                                    <PostContainer/>
                                </RequireAuth>}
                            path="/posts"
                        />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Route>
                </Route>
            ))
            break;
        }
        default: {
            router = createBrowserRouter(createRoutesFromElements
            (
                <Route path="/" element={<Root/>}>

                    <Route
                        element={<LoginPage/>}
                        path="/login"
                    />
                    <Route path="/menu" element={<Navbar/>}>
                        <Route
                            element={
                                <RequireAuth>
                                    <PostContainer/>
                                </RequireAuth>}
                            path="/posts"
                        />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Route>
                </Route>
            ))
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
