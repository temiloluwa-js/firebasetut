import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";
const Home = () => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div>
      {postList.map((post) => {
        return (
          <div>
            <div className="post" key={post.id}>
              {post.title}
            </div>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
