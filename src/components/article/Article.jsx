import React from "react";
import article1 from "../../assets/img/article1.jfif";

import "./Article.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={article1} alt="" />

        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>NASA</h3>

          <p>
            If you use this site regularly and would like to help keep the site
            on the Internet, please consider donating a small sum to help pay
            for the hosting and bandwidth bill. There is no minimum donation,
            any sum is appreciated - click here to donate using PayPal. Thank
            you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDj
          </p>
        </div>
      </article>
    );
  }
}
