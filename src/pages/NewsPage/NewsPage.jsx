import React, { useState, useEffect } from "react";
import "./NewsPage.styles.scss";
import NewsCard from '../../components/NewsCard/NewsCard';
import { firestore } from '../../firebase/firebase';

const NewsPage = () => {

  const [newsList, updateNewsList] = useState(null);
  const url =
		"http://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=f8636665ab5146db87c46c7a527a80c9";
  const fetchNews = async () => {
    const retrieveArticlesDoc = await firestore.collection('news').doc('news').get();
    const retrieveArticles = retrieveArticlesDoc.data().articles;
    updateNewsList(retrieveArticles);

    const newsList = await fetch(url);
    const newsList_JSON = await newsList.json();
    const articles = newsList_JSON.articles;
    firestore.collection('news').doc('news').set({ articles });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-page">
      <div className="header">Entertainment News</div>
      
      
      { !newsList ? <div>Loading...</div> :
        newsList.map( news => (
          <NewsCard {...news} key={news.title} />
        ))
      }
      <div className="footer">Powered by NewsApi.org </div>
    </div>
  )
};


export default NewsPage;
