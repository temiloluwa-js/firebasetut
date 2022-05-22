import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      {""}
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div>
          <label>Title:</label>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
        </div>
        <button type="submit " onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
