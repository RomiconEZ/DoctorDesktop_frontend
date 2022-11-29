import React, {useCallback} from 'react';
import useSearch from "../../hooks/useSearch";
import useSort from "../../hooks/useSort";
import usePagination from "../../hooks/usePagination";
import {useAppSelector} from "../../hooks/redux";
import Searchbar from "../common/Searchbar";
import PatientsSort from "./PatientsSort";
import PatientsDisplayCount from "./PatientsDisplayCount";
import Pagination from "../common/Pagination";
import PatientsListSkeleton from "./PatientsList/PatientsListSkeleton";
import PatientsList from "./PatientsList/PatientsList";

const setPageSizeOptions = [
    { name: '6', value: 6 },
    { name: '12', value: 12 },
    { name: '18', value: 18 },
    { name: '24', value: 24 },
];

const TablePatients = () => {
    const {entities, isLoading} = useAppSelector(state => state.patientsReducer)

    // const { searchFilters, handleResetSearchFilters } = useFiltersQuery();
    const { filteredData, searchTerm, setSearchTerm, handleChangeSearch } = useSearch(entities, {
        searchBy: 'surname', // пока поиск только по id
    });
    const { sortedItems, sortBy, setSortBy } = useSort(filteredData || [], { path: 'age', order: 'desc' });
    const {
        itemsListCrop: patientsListCrop,
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
    //     handleResetSearchFilters();
    //     setSearchTerm('');
    //     setSortBy({ path: 'id', order: 'desc' });
    //     handleChangePageSize({ target: setPageSizeOptions[1] });
    // }, [handleChangePageSize, handleResetSearchFilters]);

    // useEffect(() => {
    //
    //     if (user?.id != null) {
    //         dispatch(loadFilteredPatientsList(user.id, {...searchFilters}));
    //     }
    // }, [searchFilters]);

    return (
        <div className="mt-3">
            <Searchbar value={searchTerm} onChange={handleChangeSearch} />
            <PatientsSort sortBy={sortBy} onSort={handleSort} />
            <PatientsDisplayCount count={pageSize} setCount={handleChangePageSize} options={setPageSizeOptions} />
            <table className="min-w-full mt-5">
                <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-black-dark-my px-6 py-4 text-left">Фамилия Имя Отчество</th>
                    <th scope="col" className="text-sm font-medium text-black-dark-my px-6 py-4 text-left">Дата рождения</th>
                    <th scope="col" className="text-sm font-medium text-black-dark-my px-6 py-4 text-left">Возраст</th>
                    <th scope="col" className="text-sm font-medium text-black-dark-my px-6 py-4 text-left">Пол</th>
                    <th scope="col" className="text-sm font-medium text-black-dark-my px-6 py-4 text-left">Регион</th>
                    <th scope="col" className="text-sm font-medium text-black-dark-my px-6 py-4 text-left">Город</th>
                    <th scope="col" className="text-sm font-medium text-black-dark-my px-6 py-4 text-left">Регион обследования</th>
                </tr>
                </thead>
                <tbody>
                {isLoading ? <PatientsListSkeleton pageSize={pageSize} /> : <PatientsList patients={patientsListCrop} />}
                {patientsListCrop.length === 0 && <tr className="text-azure-my font-medium">
                    <td>Пациентов не найдено</td>
                </tr>}
                </tbody>
            </table>


            {sortedItems.length > pageSize && (
                <div >
                    <Pagination items={sortedItems} pageSize={pageSize} currentPage={currentPage} onChange={handleChangePage} />
                    <p>
                        {`${(currentPage - 1) * pageSize || 1} - 
              ${pageSize * currentPage > entities.length ? entities.length : pageSize * currentPage}
              из ${entities.length} пациентов`}
                    </p>
                </div>
            )}

        </div>
    );
};
export default TablePatients;