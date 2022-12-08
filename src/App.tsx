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
import PersonalDataReadOnly from "./components/patientCardComponents/readOnlyForms/PersonalDataReadOnly";
import AnamnesisReadOnly from "./components/patientCardComponents/readOnlyForms/AnamnesisReadOnly";
import ClinicDataReadOnly from "./components/patientCardComponents/readOnlyForms/ClinicDataReadOnly";
import AnthropometricDataReadOnly from "./components/patientCardComponents/readOnlyForms/AnthropometricDataReadOnly";
import ComputerTomographyReadOnly from "./components/patientCardComponents/readOnlyForms/ComputerTomographyReadOnly";
import ConcomDeseasesReadOnly from "./components/patientCardComponents/readOnlyForms/ConcomDeseasesReadOnly";
import EchoCardiogramReadOnly from "./components/patientCardComponents/readOnlyForms/EchoCardiogramReadOnly";
import PersonalDataEdit from "./components/patientCardComponents/editForms/PersonalDataEdit";
import AnthropometricDataEdit from "./components/patientCardComponents/editForms/AnthropometricDataEdit";
import ComputerTomographyEdit from "./components/patientCardComponents/editForms/ComputerTomographyEdit";
import ClinicDataEdit from "./components/patientCardComponents/editForms/ClinicDataEdit";
import AnamnesisEdit from "./components/patientCardComponents/editForms/AnamnesisEdit";
import ConcomDeseasesEdit from "./components/patientCardComponents/editForms/ConcomDeseasesEdit";
import EchoCardiogramEdit from "./components/patientCardComponents/editForms/EchoCardiogramEdit";
import MSCTReadOnly from "./components/patientCardComponents/readOnlyForms/MSCTReadOnly";
import MSCTEdit from "./components/patientCardComponents/editForms/MSCTEdit";
import NeuralNetEdit from "./components/patientCardComponents/editForms/NeuralNetEdit";
import NeuralNetReadOnly from "./components/patientCardComponents/readOnlyForms/NeuralNetReadOnly";

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

                <Route path="menu/patients/:id" element={<RequireAuthPatientPage><SelectedPatientPage/></RequireAuthPatientPage>}>
                    <Route
                        element=
                            {
                                <PersonalDataReadOnly/>
                            }
                        path="personal-data"
                    />
                    <Route
                        element=
                            {
                                <PersonalDataEdit/>
                            }
                        path="personal-data/edit"
                    />
                    <Route
                        element=
                            {
                                <AnthropometricDataReadOnly/>
                            }
                        path="anthropometric-data"
                    />
                    <Route
                        element=
                            {
                                <AnthropometricDataEdit/>
                            }
                        path="anthropometric-data/edit"
                    />
                    <Route
                        element=
                            {
                                <ComputerTomographyReadOnly/>
                            }
                        path="computer-aided-tomography"
                    />
                    <Route
                        element=
                            {
                                <ComputerTomographyEdit/>
                            }
                        path="computer-aided-tomography/edit"
                    />
                    <Route
                        element=
                            {
                                <ClinicDataReadOnly/>
                            }
                        path="clinic-data"
                    />
                    <Route
                        element=
                            {
                                <ClinicDataEdit/>
                            }
                        path="clinic-data/edit"
                    />
                    <Route
                        element=
                            {
                                <AnamnesisReadOnly/>
                            }
                        path="anamnesis"
                    />
                    <Route
                        element=
                            {
                                <AnamnesisEdit/>
                            }
                        path="anamnesis/edit"
                    />
                    <Route
                        element=
                            {
                                <ConcomDeseasesReadOnly/>
                            }
                        path="concom-deseases"
                    />
                    <Route
                        element=
                            {
                                <ConcomDeseasesEdit/>
                            }
                        path="concom-deseases/edit"
                    />
                    <Route
                        element=
                            {
                                <EchoCardiogramReadOnly/>
                            }
                        path="echocardiogram"
                    />
                    <Route
                        element=
                            {
                                <EchoCardiogramEdit/>
                            }
                        path="echocardiogram/edit"
                    />

                    <Route
                        element=
                            {
                                <MSCTReadOnly/>
                            }
                        path="msct"
                    />
                    <Route
                        element=
                            {
                                <MSCTEdit/>
                            }
                        path="msct/edit"
                    />
                    <Route
                        element=
                            {
                                <NeuralNetReadOnly/>
                            }
                        path="neural-net"
                    />
                    <Route
                        element=
                            {
                                <NeuralNetEdit/>
                            }
                        path="neural-net/edit"
                    />
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Route>
    )
)

function App() {

    return (
        <div className="h-screen w-screen">
            <RouterProvider router={router} />
        </div>
  );
}

export default App;
