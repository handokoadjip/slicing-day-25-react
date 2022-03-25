import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionHeader,
  SectionContent,
  SectionFooter,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title =
      "Die Finnhütte | Modern Architecture and Interior Design Theme";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionContent />
        </Main>
        <SectionFooter />
        <Footer />
      </>
    );
  }
}

export default index;
