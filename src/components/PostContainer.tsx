import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100);

    // в опциях можно указывать selector и получать определенные данные

    const {data: posts, error, isLoading, refetch} =  postAPI.useFetchAllPostsQuery(limit) // автосгенерированные хуки на соновании endpoint
    const [createPost, {}] = postAPI.useCreatePostMutation() // {}-функция, которую мы можем вызвать, чтобы произошла мутация, createPost - объект с полями
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    //выше в {} можно указать, что хотим также получать error, loading и тп


    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    // функция создания поста, на вход которой получаем объект типа post
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/> // remove={handleRemove} update={handleUpdate} - пробрасываеи функции как props в компонент
                )}
            </div>
        </div>
    );
};

export default PostContainer;
