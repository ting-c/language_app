import React, { useState, useEffect } from "react";
import "./NewsPage.styles.scss";
import NewsCard from '../../components/NewsCard/NewsCard';

const NewsPage = () => {

  const [newsList, updateNewsList] = useState(null);

  const url = "https://us-central1-korean-app-c9b8e.cloudfunctions.net/api";
  // const url = 'https://localhost:4000/server';
  const fetchNews = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
    const newsList = await fetch(
			url,
			{ headers }
		);
    const newsList_JSON = await newsList.json();
    updateNewsList(newsList_JSON);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(newsList);

  return (
    <div className="news-page">
      <div className="header">Top headlines from allkpop.com</div>
      { !newsList ? <div>Loading...</div> :
        newsList.map( news => (
          <NewsCard {...news} key={news.title} />
        ))
      }
    </div>
  )
};


export default NewsPage;
