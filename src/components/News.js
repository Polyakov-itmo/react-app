import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/actions";

import { body } from "../style/styles";
import Post from "./Post";

export default function News() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts.posts;
  });

  if (posts.length <= 0) {
    return (
      <div style={body}>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(loadPosts())}
        >
          Загрузть
        </button>
      </div>
    );
  } else
    return posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
}
