import React from 'react';
import './App.css';
import PostContainer from "./components/PostContainer";
import {Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import NotFoundPage from "./components/pages/NotFoundPage";
import Root from "./components/UI/Root";
import {RequireAuth} from "./components/hoc/RequireAuth";
import LoginPage from "./components/pages/LoginPage";
import MenuPage from "./components/pages/MenuPage";
// нужно импортнуть стриницы

// doctor - 1
// developer - 2
// codeveloper - 3
// admin - 4
// registry - 5
// expert - 6
// dataadmin - 7

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
                        <Route path="/doctor" element={<Navbar/>}>

                            <Route
                                element={
                                <RequireAuth>
                                    <MenuPage/>
                                </RequireAuth>}
                                    path="/menu"
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
                        <Route path="/developer" element={<Navbar/>}>

                            <Route
                                element={
                                    <RequireAuth>
                                        <MenuPage/>
                                    </RequireAuth>}
                                path="/menu"
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
                        <Route path="/codeveloper" element={<Navbar/>}>

                            <Route
                                element={
                                    <RequireAuth>
                                        <MenuPage/>
                                    </RequireAuth>}
                                path="/menu"
                            />
                            <Route path="*" element={<NotFoundPage/>} />

                        </Route>
                    </Route>
                )
            )
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
                        <Route path="/admin" element={<Navbar/>}>

                            <Route
                                element={
                                    <RequireAuth>
                                        <MenuPage/>
                                    </RequireAuth>}
                                path="/menu"
                            />
                            <Route path="*" element={<NotFoundPage/>} />

                        </Route>
                    </Route>
                )
            )
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
                        <Route path="/registry" element={<Navbar/>}>

                            <Route
                                element={
                                    <RequireAuth>
                                        <MenuPage/>
                                    </RequireAuth>}
                                path="/menu"
                            />
                            <Route path="*" element={<NotFoundPage/>} />

                        </Route>
                    </Route>
                )
            )
            break;
        }
        case 6: {
            router = createBrowserRouter(createRoutesFromElements
                (
                    <Route path="/" element={<Root/>}>

                        <Route
                            element={<LoginPage/>}
                            path="/login"
                        />
                        <Route path="/expert" element={<Navbar/>}>

                            <Route
                                element={
                                    <RequireAuth>
                                        <MenuPage/>
                                    </RequireAuth>}
                                path="/menu"
                            />
                            <Route path="*" element={<NotFoundPage/>} />

                        </Route>
                    </Route>
                )
            )
            break;
        }
        case 7: {
            router = createBrowserRouter(createRoutesFromElements
                (
                    <Route path="/" element={<Root/>}>

                        <Route
                            element={<LoginPage/>}
                            path="/login"
                        />
                        <Route path="/dataadmin" element={<Navbar/>}>

                            <Route
                                element={
                                    <RequireAuth>
                                        <MenuPage/>
                                    </RequireAuth>}
                                path="/menu"
                            />
                            <Route path="*" element={<NotFoundPage/>} />

                        </Route>
                    </Route>
                )
            )
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

                            <Route path="*" element={<NotFoundPage/>} />

                    </Route>
                )
            )
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
