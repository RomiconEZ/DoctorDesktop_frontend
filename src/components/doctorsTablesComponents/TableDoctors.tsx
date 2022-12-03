import React, {useCallback} from 'react';

import useSearch from "../../hooks/useSearch";
import useSort from "../../hooks/useSort";
import usePagination from "../../hooks/usePagination";
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

    const {entities, isLoading} = useAppSelector(state => state.doctorsReducer)


    // const { searchFilters, handleResetSearchFilters } = useFiltersQuery();

    const { filteredData, searchTerm, setSearchTerm, handleChangeSearch } = useSearch(entities, {
        searchBy: 'surname', // пока поиск только по фамилии
    });
    const { sortedItems, sortBy, setSortBy } = useSort(filteredData || [], { path: 'id', order: 'desc' });
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


    // const handleResetFilters = useCallback(() => {
    //     // handleResetSearchFilters();
    //     setSearchTerm('');
    //     setSortBy({ path: 'id', order: 'desc' });
    //     handleChangePageSize({ target: setPageSizeOptions[1] });
    // }, [handleChangePageSize]);

    // useEffect(() => {
    //
    //     setSessionStorageData(searchFilters);
    //     if (user?.id != null) {
    //         dispatch(loadFilteredDoctorsList(user.id, {...searchFilters}));
    //     }
    // }, [searchFilters]);

    return (
        <div className="mt-3">

            <div className="flex flex-row w-2/3">
                    <Searchbar value={searchTerm} onChange={handleChangeSearch} />
                    <DoctorsSort sortBy={sortBy} onSort={handleSort} />
                    <DoctorsDisplayCount count={pageSize} setCount={handleChangePageSize} options={setPageSizeOptions} />
            </div>

            <div className="border-0 pb-3 rounded-md mt-5 overflow-hidden">
                <table className="table-fixed w-full">

                    <thead className="border-b">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-800">Фамилия Имя Отчество</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-800">Возраст</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-800">Опыт работы</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-800">Место работы</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-800">ID</th>
                        </tr>
                    </thead>

                    <tbody>
                    {isLoading ? <DoctorsListSkeleton pageSize={pageSize} /> : <DoctorsList doctors={doctorsListCrop} />}
                    {doctorsListCrop.length === 0 && <tr className="text-our-greenish-300 font-medium">
                        <td>Сотрудники не найдены</td>
                    </tr>}
                    </tbody>
                </table>
            </div>



            {sortedItems.length > pageSize && (
                <div className="relative mt-8 bottom-2">
                    <Pagination items={sortedItems} pageSize={pageSize} currentPage={currentPage} onChange={handleChangePage} />
                    <p>
                        {`${(currentPage - 1) * pageSize || 1} - 
              ${pageSize * currentPage > entities.length ? entities.length : pageSize * currentPage}
              из ${entities.length} сотрудников`}
                    </p>
                </div>
            )}





        </div>

    );
};
export default TableDoctors;