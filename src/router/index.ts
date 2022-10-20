import PostContainer from "../components/PostContainer";


export const developerRoutes = [
    {path: '/login', element: {<PostContainer/>}},
    {path: '/about', element: AboutDoctor},
    {path: '*', element: NotFoundPage},
]

export const codeveloperRoutes = [
    {path: '/login', element: Login},
    {path: '/about', element: AboutDoctor},
    {path: '*', element: NotFoundPage},
]
export const adminRoutes = [
    {path: '/login', element: Login},
    {path: '/about', element: AboutDoctor},
    {path: '*', element: NotFoundPage},
]
export const doctorRoutes = [
    {path: '/login', element: Login},
    {path: '/about', element: AboutDoctor},
    {path: '*', element: NotFoundPage},
]
export const regisRoutes = [
    {path: '/login', element: Login},
    {path: '/about', element: AboutDoctor},
    {path: '*', element: NotFoundPage},
]
export const expertRoutes = [
    {path: '/login', element: Login},
    {path: '/about', element: AboutDoctor},
    {path: '*', element: NotFoundPage},
]

//      {path: '/post/:id', element: AboutDoctor} - пример с параметром
//      {path: '/post/:id/edit', element: AboutDoctor} - пример с параметром