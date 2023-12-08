import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md mt-2">
      <Link to={'/blog/react-custom-hooks-useDarkSide'}>
        <img
          src="/img/blog-1-banner.webp"
          alt="use-dark-side"
          className="w-full scale-100 hover:scale-95 transition duration-500"
        />
      </Link>
      <div className="px-6 py-4">
        <div className="font-semibold text-xl">
          React Custom Hooks: useDarkSide
        </div>
        <p className="text-gray-700 text-sm">Aug 27, 2023</p>
        <p className="line-clamp-3">
          Have you ever encountered situations where you needed to handle user
          input in real-time interactions, such as instant search or live
          content filtering? These scenarios often come with a challenge:
          managing the frequency of function calls triggered by user input.
          That's where the useDebounce custom hook comes to the rescue. In this
          article, we'll explore the concept of debouncing, the importance of
          the useDebounce hook, and provide you with a hands-on example of its
          implementation in a React application.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
