import React, { useState, useEffect } from "react";
import "./NewsPage.styles.scss";
import NewsCard from '../../components/NewsCard/NewsCard';

const NewsPage = () => {

  const [newsList, updateNewsList] = useState(null);
  const url =
		"http://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=f8636665ab5146db87c46c7a527a80c9";
  const fetchNews = async () => {
    const newsList = await fetch(url);
    console.log(newsList)
    const newsList_JSON = await newsList.json();
    const articles = newsList_JSON.articles;
    updateNewsList(articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(newsList);

  return (
    <div className="news-page">
      <div className="header">Entertainment News</div>
      { !newsList ? <div>Loading...</div> :
        newsList.map( news => (
          <NewsCard {...news} key={news.title} />
        ))
      }
    </div>
  )
};


export default NewsPage;
