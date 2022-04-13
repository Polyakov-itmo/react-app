import React from "react";

const postStyle = {
  margin: "10px",
  //   border: "2px solid rgb(94, 124, 255)",
  backgroundColor: "rgb(94, 124, 255)",
  borderRadius: "5px",
  padding: "10px 20px 5px 20px",
};

export default function Post({ post }) {
  return (
    <div style={postStyle}>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
    </div>
  );
}
