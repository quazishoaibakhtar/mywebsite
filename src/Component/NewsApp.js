import React from "react";
import "./NewsApp.css";
function newsApp({ news }) {
  return (
    <div className="lope">
      <img src={news.urlToImage} alt={news.title} />
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <button className="btn" onClick={() => window.open(news.url)}>
        Read More
      </button>
    </div>
  );
}

export default newsApp;
