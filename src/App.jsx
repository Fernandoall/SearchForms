import React from "react";
import { Article } from "./components/article/Article";
import { Navbar } from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article title="Exemplo" />
          <Article />
          <Article />
          <Article />
        </section>
      </>
    );
  }
}

export default App;
