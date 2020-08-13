import React, {Component} from "react";
import { withRouter } from 'react-router-dom'
//Layout
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component{
  constructor(props) {
    super(props);
  }

  setStatusClass() {
    const pathname = this.props.location.pathname.replace("/","");
    const $root = document.querySelector("body")
    const className = pathname ? `${pathname}-page` : "";
    $root.setAttribute("class", className)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location !== prevProps.location) {
      this.setStatusClass();
    }
  }
  componentDidMount() {
    this.setStatusClass()
  }


  render(){

    return (
      <>
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </>
    )
  }
}

export default withRouter(Layout);
