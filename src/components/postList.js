import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Added .catch() so app won’t crash if server is down.
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token"); 
      // no fix included - pass token 
      const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setPosts(posts.filter((p) => p._id !== id));
      } else {
        alert("Unauthorized or failed delete.");
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Content</th>
            <th>Picture</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>{post.username}</td>
              <td>{post.content}</td>
              <td>{post.picture}</td>
              <td>
                <button onClick={() => handleDelete(post._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
