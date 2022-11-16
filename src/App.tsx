import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/mainMenu/MainMenu";
import SideBar from "./pages/patientProfile/SideBar";
import PersonalData from "./pages/patientProfile/PersonalData";
import ComputerTomography from "./pages/patientProfile/ComputerTomography";
import AnthropometricData from "./pages/patientProfile/AnthropometricData";
import ClinicData from "./pages/patientProfile/ClinicData";
import "./index.css"
import Anamnes from './pages/patientProfile/Anamnes';
import ConcomDiseases from './pages/patientProfile/ConcomDiseases';
import Echocardiogram from "./pages/patientProfile/Echocardiogram";
import MultispiralCT from "./pages/patientProfile/MultispiralCT";
import NeuralNetwork from "./pages/patientProfile/NeuralNetwork";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMenu />} />
                <Route path="/patientCard" element={<SideBar />}>
                    <Route path="personalData" element={<PersonalData/>} />
                    <Route path="computer-aided-tomography" element={<ComputerTomography/>} />
                    <Route path="anthropometric-data" element={<AnthropometricData />} />
                    <Route path="clinic-data" element={<ClinicData />} />
                    <Route path="anamnesis" element={<Anamnes />} />
                    <Route path="concomDeseases" element={<ConcomDiseases />} />
                    <Route path="echocardiogram" element={<Echocardiogram />} />
                    <Route path="msct" element={<MultispiralCT />} />
                    <Route path="neuralNet" element={<NeuralNetwork />} />
                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;
