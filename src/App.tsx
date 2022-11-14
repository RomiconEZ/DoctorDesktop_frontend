import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SearchTablePagination from "./pages/SearchTablePagination";
import CardDoctor from "./pages/CardDoctor";
import {EditCardDoctor} from "./pages/EditCardDoctor";

function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route path={"/table"} element={<SearchTablePagination/>}/>
              <Route path={"/doctor/:id"} element={<CardDoctor/>}/>
              <Route path={"/editcard/:id"} element={<EditCardDoctor/>}/>

          </Routes>

      </BrowserRouter>
  );
}

export default App;
