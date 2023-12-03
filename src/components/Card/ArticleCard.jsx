import React from 'react';

const ArticleCard = ({ image, title, date }) => {
  return (
    <div className="mx-5 scale-100 hover:scale-95 duration-200 ">
      <img src={image} alt="" className="rounded-md mb-3 h-[150px] object-cover"  />
      <h1 className="font-medium">{title}</h1>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};

export default ArticleCard;
