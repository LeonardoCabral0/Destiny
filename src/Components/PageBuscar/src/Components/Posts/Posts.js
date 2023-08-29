//CSS
import './Posts.css'

//Hooks
import { useState, useEffect } from 'react'

//Components
import PostCard from '../PostCard/PostCard'

export default function Posts() {
    const [posts, setPosts] = useState([])

    // const request = () => {
    //     fetch('http://localhost:5151/Posts')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setPosts([])
    //     })
    // }

    useEffect(() => {
        fetch('http://localhost:5151/Posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])



    return (
        <div className="container-posts">
            {posts.map(post => {
                return (
                    <PostCard 
                    key={post.postId} 
                    nome={(post.nome)} 
                    uf={post.uf}
                    cidade = {post.cidade}
                    referencia={post.referencia}
                    descricao={post.descricao}
                    />
                )
            })}
        </div>
    )
}