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
import SelfPage from "./components/pages/SelfPage";
import GraphInterPage from "./components/pages/GraphInterPage";
import {RequireAuthSelfPage} from "./components/hoc/RequireAuthSelfPage";
import {RequireAuthGraphInterPage} from "./components/hoc/RequireAuthGraphInterPage";
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
                                    <GraphInterPage/>
                            }
                        path="menu/graphinter"
                    />

                    <Route
                        element=
                            {
                                <RequireAuthUpdateDoctorPage>
                                    <UpdateDoctorPage/>
                                </RequireAuthUpdateDoctorPage>
                            }
                        path="menu/doctors/editdoctor/:id"
                    />
                    <Route
                        element=
                            {
                                <RequireAuthSelfPage>
                                    <SelfPage/>
                                </RequireAuthSelfPage>
                            }
                        path="menu/selfpage"
                    />
                    <Route
                        element=
                            {
                                <RequireAuthGraphInterPage>
                                <GraphInterPage/>
                                </RequireAuthGraphInterPage>
                            }
                        path="menu/graphinter"
                    />
                    <Route
                        element=
                            {
                                <RequireAuthDoctorsListPage>
                                    <DoctorsTablePage/>
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
                                    <PatientsTablePage/>
                                </RequireAuthPatientsListPage>
                            }
                        path="menu/patients"
                    />

                    <Route
                        element=
                            {
                                <RequireAuthPatientPage>
                                    <SelectedPatientPage/>
                                </RequireAuthPatientPage>
                            }
                        path="menu/patients/:id"
                    />
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Route>
    )
)

function App() {

    return (

    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
