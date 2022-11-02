import React from "react";
import TableDoctor from "../components/TableDoctor";
import SearchDoctor from "../components/SearchDoctor";


const SearchAndListOfDoctors = ()=>{
    return(
        <div>
            <SearchDoctor/>
            <TableDoctor/>
        </div>
    )
}

export default SearchAndListOfDoctors;