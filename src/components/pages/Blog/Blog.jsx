import React from "react";
import Header from "../../Fragments/Home/Header";
import { blog } from "../../../service/_data";
import BlogCard from "../../Card/BlogCard";

const Blog = () => {
  return (
    <div className="dark:text-white lg:h-screen">
      <Header title={blog.title} description={blog.description} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default Blog;
