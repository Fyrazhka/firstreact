import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import {usePosts} from "../hooks/usePosts";
import {getPageCount} from "../utils/pages";



function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter]=useState({sort:'', query:''})
    const[modal, setModal]=useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedandSearchedposts=usePosts(posts, filter.sort, filter.query)

    const [fetchPosts,isPostLoading,postError] =useFetching( async () =>{
        const response = await PostService.getAll(limit,page);
        setPosts(response.data)
        const totalCount=response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })



    const changePage = (page) =>{
        setPage(page)
        //fetchPosts()
    }
    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }


    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostLoading
                ?  <div style={{display: 'flex',justifyContent:'center', marginTop:'50px'}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedandSearchedposts} title='Список постов' />
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;