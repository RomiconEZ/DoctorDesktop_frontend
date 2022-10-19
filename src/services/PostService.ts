import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postAPI = createApi({
    reducerPath: 'postAPI', // уникальное название
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        // quary - получение данных с сервера (get)
        // mutation - изменение данных с сервера (post / put)
        fetchAllPosts: build.query<IPost[], number>({
            // тело запроса
            // 2-ой generic(параметр) - тип входного аргумента
            query: (limit: number = 5) => ({
                url: `/posts`, // url до конкретного endpoint | будет приплюсовываться к базовому
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post'] // указывает, что работаем с тегом post
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post'] // указываем, что данный endpoint обеспечивает доставку данных
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})
