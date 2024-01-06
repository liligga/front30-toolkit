import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { DeleteIcon } from '../components/UI/icons'
import { fetchPosts, asyncDeletePost } from '../store/postsSlice'

const PostsListPage = () => {
  const posts = useSelector(state => state.posts.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const deletePost = (id) => {
    dispatch(asyncDeletePost(id))
  }

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className='text-2xl col-span-full'>Список постов</span>

      <div className="w-full flex justify-center items-center flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-full sm:w-3/4 md:w-[1000px] bg-slate-300 px-2 py-1 flex justify-between gap-4 rounded-md">
            <Link to={`/posts/${post.id}/edit`}>{post.title}</Link>
            <button onClick={() => deletePost(post.id)}><DeleteIcon /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsListPage
