import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getDoctorsLoadingStatus, getFilteredDoctors} from '../../store/reducers/DoctorsSlice';
import {useAppDispatch} from "../../store/store";
import useFiltersQuery from "../../hooks/useFiltersQuery";




const TableDoctors = () => {
    const doctors = useSelector(getFilteredDoctors());
    const dispatch = useAppDispatch();
    const roomsIsLoading = useSelector(getDoctorsLoadingStatus());
    const { searchFilters, handleResetSearchFilters } = useFiltersQuery();
    const { filteredData, searchTerm, setSearchTerm, handleChangeSearch } = useSearch(rooms, {
        searchBy: 'roomNumber',
    });
        return (
        <div>
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
                {doctors.map(doctor =>
                    <tr key={doctor.id}>
                        <Link to={`/doctor/${doctor.id}`} state={{doctor}}><td>{doctor.surname+ ' ' + doctor.name + ' ' + doctor.patronymic}</td></Link>
                        <td>{doctor.birthday}</td>
                        <td>{doctor.role}</td>
                        <td>{doctor.profiled}</td>
                        <td>{doctor.clinic}</td>
                        <td>{doctor.id}</td>
                    </tr>
                )}
                </tbody>
            </table>

            {sortedItems.length > pageSize && (
                <div className='rooms-page__pagination'>
                    <Pagination items={sortedItems} pageSize={pageSize} currentPage={currentPage} onChange={handleChangePage} />
                    <p className='rooms-page__pagination-info'>
                        {`${(currentPage - 1) * pageSize || 1} - 
              ${pageSize * currentPage > rooms.length ? rooms.length : pageSize * currentPage}
              из ${rooms.length} вариантов аренды`}
                    </p>
                </div>
            )}

        </div>
    );
};
export default TableDoctors;