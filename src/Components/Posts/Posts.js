//CSS
import './Posts.css'

//Hooks
import { useState, useEffect } from 'react'

//Components
import PostCard from '../PostCard/PostCard'

export default  function Posts({ allPosts }){
    return (
        <div className="container-posts">
            {allPosts.map(post => {
                return (
                    <PostCard
                        key={post.postId}
                        nome={(post.nome)}
                        uf={post.uf}
                        cidade={post.cidade}
                        referencia={post.referencia}
                        descricao={post.descricao}
                        data={post.data}
                    />
                )
            })}
        </div>
    )
}