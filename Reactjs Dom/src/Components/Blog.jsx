import React from "react";
import { Link, Outlet } from "react-router-dom";

function Blog() {
  return (
    <>
      <h2>Blog</h2>
      <ul>
        <li>
          {" "}
          <Link to="article1">Article1</Link>
        </li>
        <li>
          <Link to="article2">Article2</Link>
        </li>
        <Outlet />
      </ul>
    </>
  );
}

export default Blog;
