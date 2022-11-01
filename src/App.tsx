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
import CreatePatientPage from "./components/pages/CreatePatientPage";
import CreateDoctorPage from "./components/pages/CreateDoctorPage";
import UpdateDoctorPage from "./components/pages/UpdateDoctorPage";
// нужно импортнуть стриницы

// doctor - 1
// developer - 2
// codeveloper - 3
// admin - 4
// registry - 5
// expert - 6
// dataadmin - 7

const router = createBrowserRouter(createRoutesFromElements
    (
        <Route path="/" element={<Root/>}>

            <Route
                element={<LoginPage/>}
                path="login"
            />

            <Route path="auth" element={<Navbar/>}>

                <Route
                    element=
                        {
                        <RequireAuth>
                            <MenuPage/>
                        </RequireAuth>
                        }
                    path="menu"
                />

                <Route
                    element=
                        {
                            <RequireAuth>
                                <CreatePatientPage/>
                            </RequireAuth>
                        }
                    path="menu/newpatient"
                />

                <Route
                    element=
                        {
                            <RequireAuth>
                                <CreateDoctorPage/>
                            </RequireAuth>
                        }
                    path="menu/newdoctor"
                />

                <Route
                    element=
                        {
                            <RequireAuth>
                                <UpdateDoctorPage/>
                            </RequireAuth>
                        }
                    path="menu/doctors/:id/editdoctor"
                />

                <Route
                    element=
                        {
                            <RequireAuth>
                                <DoctorsListPage/>
                            </RequireAuth>
                        }
                    path="menu/doctors"
                />
                <Route
                    element=
                        {
                            <RequireAuth>
                                <DoctorPage/>
                            </RequireAuth>
                        }
                    path="menu/doctors/:id"
                />
                <Route
                    element=
                        {
                            <RequireAuth>
                                <PatientsListPage/>
                            </RequireAuth>
                        }
                    path="menu/patients"
                />

                <Route
                    element=
                        {
                            <RequireAuth>
                                <PatientPage/>
                            </RequireAuth>
                        }
                    path="menu/patients/:id"
                />


            <Route path="*" element={<NotFoundPage/>} />

            </Route>
        </Route>
    )
)

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
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
