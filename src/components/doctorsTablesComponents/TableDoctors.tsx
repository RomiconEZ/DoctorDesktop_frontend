import React, {useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {
    getDoctorsLoadingStatus,
    getFilteredDoctors,
    loadFilteredDoctorsList,
} from '../../store/reducers/DoctorsSlice';
import {useAppDispatch} from "../../store/store";
import useFiltersQuery from "../../hooks/useFiltersQuery";
import useSearch from "../../hooks/useSearch";
import useSort from "../../hooks/useSort";
import usePagination from "../../hooks/usePagination";
import {setSessionStorageData} from "../../services/sessionStorage.service";
import {useAppSelector} from "../../hooks/redux";
import Searchbar from "../common/Searchbar";
import DoctorsSort from "./DoctorsSort";
import DoctorsDisplayCount from "./DoctorsDisplayCount";
import Pagination from "../common/Pagination";
import DoctorsListSkeleton from "./DoctorsList/DoctorsListSkeleton";
import DoctorsList from "./DoctorsList/DoctorsList";


const setPageSizeOptions = [
    { name: '6', value: 6 },
    { name: '12', value: 12 },
    { name: '18', value: 18 },
    { name: '24', value: 24 },
];

const TableDoctors = () => {
    const {user} = useAppSelector(state => state.userReducer)

    const doctors = useSelector(getFilteredDoctors());
    const dispatch = useAppDispatch();
    const doctorsIsLoading = useSelector(getDoctorsLoadingStatus());
    const { searchFilters, handleResetSearchFilters } = useFiltersQuery();
    const { filteredData, searchTerm, setSearchTerm, handleChangeSearch } = useSearch(doctors, {
        searchBy: 'surname', // пока поиск только по фамилии
    });
    const { sortedItems, sortBy, setSortBy } = useSort(filteredData || [], { path: 'surname', order: 'desc' });
    const {
        itemsListCrop: doctorsListCrop,
        currentPage,
        pageSize,
        handleChangePage,
        handleChangePageSize,
    } = usePagination(sortedItems || [], setPageSizeOptions[1].value);

    const handleSort = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSortBy(JSON.parse(event.target.value));
            handleChangePage(event, 1);
        },
        [handleChangePage, setSortBy]
    );
    const handleResetFilters = useCallback(() => {
        handleResetSearchFilters();
        setSearchTerm('');
        setSortBy({ path: 'surname', order: 'desc' });
        handleChangePageSize({ target: setPageSizeOptions[1] });
    }, [handleChangePageSize, handleResetSearchFilters]);

    useEffect(() => {

        setSessionStorageData(searchFilters);
        if (user?.id != null) {
            dispatch(loadFilteredDoctorsList(user.id, {...searchFilters}));
        }
    }, [searchFilters]);

    return (
        <div>
            <Searchbar value={searchTerm} onChange={handleChangeSearch} />
            <DoctorsSort sortBy={sortBy} onSort={handleSort} />
            <DoctorsDisplayCount count={pageSize} setCount={handleChangePageSize} options={setPageSizeOptions} />
            <table>
                <thead>
                <tr>
                    <th>Фамилия Имя Отчество</th>
                    <th>Дата рождения</th>
                    <th>Роль</th>
                    <th>Профиль</th>
                    <th>Учреждение</th>
                    <th>ID</th>
                </tr>
                </thead>
                <tbody>
                {doctorsIsLoading ? <DoctorsListSkeleton pageSize={pageSize} /> : <DoctorsList doctors={doctorsListCrop} />}
                {doctorsListCrop.length === 0 && <h2>Сотрудников не найдено &#128577;</h2>}

                </tbody>
            </table>


            {sortedItems.length > pageSize && (
                <div >
                    <Pagination items={sortedItems} pageSize={pageSize} currentPage={currentPage} onChange={handleChangePage} />
                    <p>
                        {`${(currentPage - 1) * pageSize || 1} - 
              ${pageSize * currentPage > doctors.length ? doctors.length : pageSize * currentPage}
              из ${doctors.length} сотрудников`}
                    </p>
                </div>
            )}

        </div>
    );
};
export default TableDoctors;