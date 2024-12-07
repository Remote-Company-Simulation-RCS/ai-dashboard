import React from "react";

function NewsPage(props) {
  const improvments = props.improvments;
  const bugfixes = props.bugfixes;
  return (
    <div className="news-card">
      <div className={`news-header`}>
        <h2 className="fw-bold">{props.version}</h2>
      </div>
      <hr />
      <div className={`news-body card-${props.cardNumber}`}>
        <h5>Improvments & Changes</h5>
        <ul>
          {improvments.map((improvment) => {
            return <li className="improvment">{improvment}</li>;
          })}
        </ul>
        <br />
        <h5>Bugfixes</h5>
        <ul>
          {bugfixes.map((bugfix) => {
            return <li className="improvment">{bugfix}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewsPage;
