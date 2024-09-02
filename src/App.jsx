import React from "react";
import { Article } from "./components/article/Article";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article
            title="Designing Dashboards."
            provider="Nasa"
            description="If you use this site regularly and would like to help keep the site
            on the Internet, please consider donating a small sum to help pay
            for the hosting and bandwidth bill. There is no minimum donation,
            any sum is appreciated - click here to donate using PayPal. Thank
            you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDj"
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="If you use this site regularly and would like to help keep the site
            on the Internet, please consider donating a small sum to help pay
            for the hosting and bandwidth bill. There is no minimum donation,
            any sum is appreciated - click here to donate using PayPal. Thank
            you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6"
          />

          <Article
            title="36 days of Malayalam type"
            provider="SpaceNews"
            description="If you use this site regularly and would like to help keep the site
            on the Internet, please consider donating a small sum to help pay
            for the hosting and bandwidth bill. There is no minimum donation,
            any sum is appreciated - click here to donate using PayPal. Thank
            you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6"
          />

          <Article
            title="Designing Dashboards."
            provider="Nasa"
            description="If you use this site regularly and would like to help keep the site
            on the Internet, please consider donating a small sum to help pay
            for the hosting and bandwidth bill. There is no minimum donation,
            any sum is appreciated - click here to donate using PayPal. Thank
            you for your support. Donate bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDj"
          />
        </section>
      </>
    );
  }
}

export default App;
