import React, {Component} from 'react';
import PropTypes from "prop-types";

const ArticleListItem = (props) => {
    return (
      <li>
        <header>
        <h1>{props.article.title}</h1>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
        </header>
        <p>{props.article.shortText}</p>
      </li>
    );
  };

  ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
  };
  
  export default ArticleListItem;