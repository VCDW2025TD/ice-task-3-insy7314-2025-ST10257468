import React from "react";
import { useParams } from "react-router-dom";

//need a place holder

function PostEdit() {
  const { id } = useParams();
  return <h2>Edit Post {id}</h2>;
}

export default PostEdit;
