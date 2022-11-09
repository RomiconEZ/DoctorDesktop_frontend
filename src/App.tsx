import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import SideBar from "./pages/patientCardComponents/SideBar";
import PersonalData from "./pages/patientCardComponents/PersonalData";
import ComputerTomography from "./pages/patientCardComponents/ComputerTomography";
import AnthropometricData from "./pages/patientCardComponents/AnthropometricData";
import ClinicData from "./pages/patientCardComponents/ClinicData";
import "./index.css"
import Anamnes from './pages/patientCardComponents/Anamnes';
import ConcomDiseases from './pages/patientCardComponents/ConcomDiseases';
import Echocardiogram from "./pages/patientCardComponents/Echocardiogram";
import MultispiralCT from "./pages/patientCardComponents/MultispiralCT";
import NeuralNetwork from "./pages/patientCardComponents/NeuralNetwork";

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
