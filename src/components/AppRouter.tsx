import React, {FC, useContext} from 'react';
import {developerRoutes, codeveloperRoutes, adminRoutes, doctorRoutes, regisRoutes, expertRoutes} from "../router";
import Loader from "./UI/Loader/Loader";
import {Routes, Route, Link}   from 'react-router-dom';
import Navbar from "./UI/Navbar/Navbar";
//маршрутизация между страницами
const AppRouter: FC = () => {


    if (isLoading) {
        return <Loader/>
    }
//обращаемся к массиву из router/index.js
    return (

    //         <Routes>
    //             <Route path="/" element={<Navbar />}>
    //                 if (Role==1) {
    //                     developerRoutes.map(route =>
    //                         <Route
    //                             element={route.element}
    //                             path={route.path}
    //                             key={route.path}
    //                         />
    //                     )
    //
    //                 }
    //                 if (Role==2) {
    //                     codeveloperRoutes.map(route =>
    //                         <Route
    //                             element={route.element}
    //                             path={route.path}
    //                             key={route.path}
    //                         />
    //                     )
    //
    //                 }
    //                 if (Role==3) {
    //                     adminRoutes.map(route =>
    //                         <Route
    //                             element={route.element}
    //                             path={route.path}
    //                             key={route.path}
    //                         />
    //                     )
    //
    //                 }
    //                 if (Role==4) {
    //                     doctorRoutes.map(route =>
    //                         <Route
    //                             element={route.element}
    //                             path={route.path}
    //                             key={route.path}
    //                         />
    //                     )
    //
    //                 }
    //                 if (Role==5) {
    //                     regisRoutes.map(route =>
    //                         <Route
    //                             element={route.element}
    //                             path={route.path}
    //                             key={route.path}
    //                         />
    //                     )
    //
    //                 }
    //                 if (Role==6) {
    //                     expertRoutes.map(route =>
    //                         <Route
    //                             element={route.element}
    //                             path={route.path}
    //                             key={route.path}
    //                         />
    //                     )
    //
    //                 }
    //
    //             </Route>
    //         </Routes>
    //
    // );
};

export default AppRouter;
