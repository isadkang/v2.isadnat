import React from "react";
import { GrArticle } from "react-icons/gr";
import { article, articleData } from "../../../service/_data";
import ArticleCard from "../../Card/ArticleCard";

const ArticleHome = () => {
  return (
    <div className="mt-5">
      <div className="text-xl font-semibold mb-3 flex gap-2">
        <GrArticle size={25} />
        <h1>{article.title}</h1>
      </div>
      <p>{article.description}</p>
      <div className="mt-5 flex flex-col lg:flex-row mx-6 lg:mx-0 ">
        {articleData.map((singleArticle, index) => (
          <ArticleCard
            key={index}
            image={singleArticle.image}
            title={singleArticle.title}
            date={singleArticle.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleHome;