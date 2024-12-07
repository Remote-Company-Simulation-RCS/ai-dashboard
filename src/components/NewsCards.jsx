import React from "react";
import "../styles/components/newsCards.css";
import NewsCard from "./NewsCard.jsx";

function NewsCards() {
  return (
    <div className="news-cards w-100 d-flex justift-content-center align-items-center my-4 gap-5">
      <NewsCard
        version="Version 2.1"
        improvments={["Added a new page with a changelog."]}
        bugfixes={[
          "Fixed AI operation in some cases.",
          "Fixed technical problems that led to failures.",
        ]}
        cardNumber={1}
      />
      <NewsCard
        version="Version 2.0"
        improvments={["Added the ability to flexibly configure subscriptopn managment."]}
        bugfixes={[
          "Reduced data loading and updating time."
        ]}
        cardNumber={2}
      />
    </div>
  );
}

export default NewsCards;
