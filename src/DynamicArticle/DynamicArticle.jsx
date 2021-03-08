import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const DynamicArticle = (props) => {
  return (
    <article>
      <nav>
      <Link to={`/articlelist`}>Back</Link>
      </nav>

      <header>
        <h1>{props.article.title}</h1>
        <address>
          by {props.article.author} (
          <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
