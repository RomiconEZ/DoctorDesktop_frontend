import React from 'react';
import {Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate} from 'react-router-dom';
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
import SelectedPatientPage from "./components/patientCardComponents/SelectedPatientPage";
import DoctorsTablePage from "./components/pages/DoctorsTablePage";
import DoctorPage from "./components/pages/DoctorPage";
import PatientsTablePage from "./components/pages/PatientsTablePage";
import "./index.css";
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
            <Route index element={<Navigate to="login" />} />
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
                >

                    <Route
                        element=
                            {
                                <RequireAuthCreatePatientPage>
                                    <CreatePatientPage/>
                                </RequireAuthCreatePatientPage>
                            }
                        path="newpatient"
                    />

                    <Route
                        element=
                            {
                                <RequireAuthCreateDoctorPage>
                                    <CreateDoctorPage/>
                                </RequireAuthCreateDoctorPage>
                            }
                        path="newdoctor"
                    />

                    <Route
                        element=
                            {
                                <RequireAuthUpdateDoctorPage>
                                    <UpdateDoctorPage/>
                                </RequireAuthUpdateDoctorPage>
                            }
                        path="doctors/editdoctor/:id"
                    />

                    <Route
                        element=
                            {
                                <RequireAuthDoctorsListPage>
                                    <DoctorsTablePage/>
                                </RequireAuthDoctorsListPage>
                            }
                        path="doctors"
                    />
                    <Route
                        element=
                            {
                                <RequireAuthDoctorPage>
                                    <DoctorPage/>
                                </RequireAuthDoctorPage>
                            }
                        path="doctors/:id"
                    />
                    <Route
                        element=
                            {
                                <RequireAuthPatientsListPage>
                                    <PatientsTablePage/>
                                </RequireAuthPatientsListPage>
                            }
                        path="patients"
                    />

                    <Route
                        element=
                            {
                                <RequireAuthPatientPage>
                                    <SelectedPatientPage/>
                                </RequireAuthPatientPage>
                            }
                        path="patients/:id"
                    />
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
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

    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
