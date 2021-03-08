import React, {Component} from 'react';
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
    const articleList = props.list;
    let displayContent;
    const mappedArticleList = articleList.map((currArticle) => (
            <li><ArticleListItem article = {currArticle}></ArticleListItem></li>
    ))
    displayContent = mappedArticleList;
    
    if (!articleList.length) {
        displayContent = <div>You have no data!</div>;
    }



  return (
    <>
      <ul>
          {displayContent}
      </ul>
    </>
  );
};


export default ArticleList;
