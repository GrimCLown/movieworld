import React from "react";
import "../../components/MovieList/Highlight.css";

const Highlight = (Highlight_bg) => {
  return (
    <div className="highlight_bg">
      <a href="" className="highlight_movie_card">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg"
          alt=""
          className="highlight_movie_poster"
        />
        <div className="highlight_movie_details">
          <h3 className="highlight_movie_details_heading">title</h3>
          <div className="highlight_movie_date_rate">
            <p>date</p>
            <p>rate</p>
          </div>
          <div>
            <p className="highlight_movie_description">DESCription</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Highlight;
