import React from 'react';
import './App.css';
import PostContainer from "./components/PostContainer";
import {Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import NotFoundPage from "./components/pages/NotFoundPage";
import Root from "./components/UI/Root";
import LoginPage from "./components/pages/LoginPage";
import MenuPage from "./components/pages/MenuPage";
import CreatePatientPage from "./components/pages/CreatePatientPage";
import CreateDoctorPage from "./components/pages/CreateDoctorPage";
import UpdateDoctorPage from "./components/pages/UpdateDoctorPage";
import {RequireAuthMenuPage} from "./components/hoc/RequireAuthMenuPage";
import {RequireAuthPatientPage} from "./components/hoc/RequireAuthPatientPage";
import {RequireAuthPatientsListPage} from "./components/hoc/RequireAuthPatientsListPage";
import {RequireAuthDoctorPage} from "./components/hoc/RequireAuthDoctorPage";
import {RequireAuthDoctorsListPage} from "./components/hoc/RequireAuthDoctorsListPage";
import {RequireAuthCreatePatientPage} from "./components/hoc/RequireAuthCreatePatientPage";
import {RequireAuthCreateDoctorPage} from "./components/hoc/RequireAuthCreateDoctorPage";
import {RequireAuthUpdateDoctorPage} from "./components/hoc/RequireAuthUpdateDoctorPage";
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
                        <RequireAuthMenuPage>
                            <MenuPage/>
                        </RequireAuthMenuPage>
                        }
                    path="menu"
                />

                <Route
                    element=
                        {
                            <RequireAuthCreatePatientPage>
                                <CreatePatientPage/>
                            </RequireAuthCreatePatientPage>
                        }
                    path="menu/newpatient"
                />

                <Route
                    element=
                        {
                            <RequireAuthCreateDoctorPage>
                                <CreateDoctorPage/>
                            </RequireAuthCreateDoctorPage>
                        }
                    path="menu/newdoctor"
                />

                <Route
                    element=
                        {
                            <RequireAuthUpdateDoctorPage>
                                <UpdateDoctorPage/>
                            </RequireAuthUpdateDoctorPage>
                        }
                    path="menu/doctors/:id/editdoctor"
                />

                <Route
                    element=
                        {
                            <RequireAuthDoctorsListPage>
                                <DoctorsListPage/>
                            </RequireAuthDoctorsListPage>
                        }
                    path="menu/doctors"
                />
                <Route
                    element=
                        {
                            <RequireAuthDoctorPage>
                                <DoctorPage/>
                            </RequireAuthDoctorPage>
                        }
                    path="menu/doctors/:id"
                />
                <Route
                    element=
                        {
                            <RequireAuthPatientsListPage>
                                <PatientsListPage/>
                            </RequireAuthPatientsListPage>
                        }
                    path="menu/patients"
                />

                <Route
                    element=
                        {
                            <RequireAuthPatientPage>
                                <patientCard/>
                            </RequireAuthPatientPage>
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
