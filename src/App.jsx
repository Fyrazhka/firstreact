import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Chess', body: 'Chess - new world' },
    { id: 2, title: '1Chess', body: 'Chess - new world' },
    { id: 3, title: 'Chess1', body: 'Chess - new world' }
  ]
  );
  

  const createPost=(newPost) =>{
    setPosts([...posts,newPost])

  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Список постов' />
    </div>
  );
}

export default App;