import React from 'react';
import "./index.css"
import {Route, Link, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
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
// нужно импортнуть страницы

// doctor - 1
// developer - 2
// codeveloper - 3
// admin - 4
// registry - 5
// expert - 6
// dataadmin - 7


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<Navigate to="login" />} />
            <Route  path="login" element={<LoginPage/>} />

            <Route path="auth" element={<Navbar/>} />

            <Route path="*" element={<NotFoundPage/>}/>

            <Route
                path="menu"
                element= {
                    <RequireAuthMenuPage>
                        <MenuPage/>
                    </RequireAuthMenuPage>
                }
            >

                <Route
                    path="newpatient"
                    element={
                            <RequireAuthCreatePatientPage>
                                <CreatePatientPage/>
                            </RequireAuthCreatePatientPage>
                        }
                />

                <Route
                    path="newdoctor"
                    element={
                            <RequireAuthCreateDoctorPage>
                                <CreateDoctorPage/>
                            </RequireAuthCreateDoctorPage>
                        }
                />

                <Route
                    path="doctors"
                    element={
                            <RequireAuthDoctorsListPage>
                                <DoctorsTablePage/>
                            </RequireAuthDoctorsListPage>
                        }
                >

                    <Route
                        path="editdoctor/:id"
                        element={
                                <RequireAuthUpdateDoctorPage>
                                    <UpdateDoctorPage/>
                                </RequireAuthUpdateDoctorPage>
                            }
                    />

                    <Route
                        path=":id"
                        element={
                                <RequireAuthDoctorPage>
                                    <DoctorPage/>
                                </RequireAuthDoctorPage>
                            }
                    />

                </Route>


                <Route
                    path="patients"
                    element={
                            <RequireAuthPatientsListPage>
                                <PatientsTablePage/>
                            </RequireAuthPatientsListPage>
                        }
                >

                    <Route
                        path=":id"
                        element={
                                <RequireAuthPatientPage>
                                    <SelectedPatientPage/>
                                </RequireAuthPatientPage>
                            }
                    />
                </Route>



            </Route>


        </Route>
    )
);

function App() {

    return (

        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
