import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const reponse = await PostService.getById(id)
        setPost(reponse.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const reponse = await PostService.getCommentsByPostId(id)
        setComments(reponse.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (<div>
            <h1>Пост {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    {post.title}
                  </div>}
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}} key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                  </div>}
        </div>);
};

export default PostIdPage;