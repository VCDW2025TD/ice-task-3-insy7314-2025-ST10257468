import React, { useState } from "react";

function PostCreate() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3000/posts/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, content, picture }),
      });

      if (res.ok) {
        console.log("Post created successfully");
      } else {
        console.error("Post creation failed");
      }
    } catch (err) {
      console.error("Post creation error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Picture (string)"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default PostCreate;
