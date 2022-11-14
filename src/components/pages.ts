

export const getPageCount = (totalCount:number, limit: number) => {
    return Math.ceil((totalCount)/ limit)

}

// export function getPagesArray(pagesCount: number, currentPage: number) {
//
//     let pages: Array<any> = []
//
//     if(pagesCount > 10) {
//             if(currentPage > 5) {
//                 for (let i = currentPage-4; i <= currentPage+5; i++) {
//                     pages.push(i)
//                     if(i == pagesCount) break
//                 }
//             }
//             else {
//                 for (let i = 1; i <= 10; i++) {
//                     pages.push(i)
//                     if(i == pagesCount) break
//                 }
//             }
//         }  else {
//             for (let i = 1; i <= pagesCount; i++) {
//                 pages.push(i)
//             }
//         }
//     return pages;
// }

export const getPagesArray = (totalPages: number) => {
    let res: Array<any> = []
    for (let i = 0; i <= totalPages; i++){
        res.push(i + 1)
    }
    return res;
}
