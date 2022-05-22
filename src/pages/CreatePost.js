import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebase-config'

const CreatePost = () => {
const {title, setTitle} = useState("")
const {post, setPost} = useState("")

const postsCollectionRef = collection(db, "posts")
const createPost = async () => {
  await addDoc(postsCollectionRef, {title, post, author={name:, id:}})
}

  return (
    <div className='createPostPage'>
      {""}
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div>
          <label>Title:</label>
          <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label>Post:</label>
          <textarea placeholder='Post...'></textarea>
        </div>
        <button type='submit '>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost