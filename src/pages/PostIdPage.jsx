import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import PostService from "../API/PostService";
const PostIdPage = () => {
    const params=useParams()
    const [post, setPost]=useState({})

    const [fetchPostById,isLoading, error] = useFetching(async (id) =>{
        const reponse=await PostService.getbyID(id)
        setPost(reponse.data)
    })


    useEffect(() =>{
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Пост {params.id}</h1>
            {isLoading
                ? <Loader/>
                :
                <div>
                    {post.title}
                </div>
            }

        </div>
    );
};

export default PostIdPage;