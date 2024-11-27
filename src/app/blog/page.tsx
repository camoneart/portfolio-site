import React from "react";
// import BlogImage from '../features/blog/components/BlogImage/BlogImage';
// import BlogList from '../features/blog/components/BlogList/BlogList';
// import BlogCard from '../features/blog/components/BlogCard/BlogCard';
import * as Blog from "../features/blog/components/index";

const BlogPage = async () => {
  const posts = await fetchAllBlogs("http://localhost:3000/api/v1/blog/getAllBlogs", {
    next: { revalidate: 6000 },
  });
  return (
    <>
      <Blog.BlogImage />
      <Blog.BlogList />
      <Blog.BlogCard />
    </>
  );
};

export default BlogPage;
