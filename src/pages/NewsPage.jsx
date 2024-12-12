import React from "react";
import Navbar from "../components/Navbar";
import NewsRow from "../components/NewsRow";
import NewsCards from "../components/NewsCards";

function NewsPage() {
  return (
    <div className="news-page">
      <Navbar />
      <NewsRow />
      <NewsCards />
    </div>
  );
}

export default NewsPage;
