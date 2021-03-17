import App from "next/app";
import React from "react";
import "../project/polyfill";
import "../project/project-components";
import Header from "../components/Header";
import "../styles/styles.scss";
import { withRouter } from 'next/router';




class MyApp extends App<{ }> {


  render() {
    const { Component, pageProps } = this.props;
    return (
            <React.Fragment>

              <div id="wrapper">
                  <div id="content-wrapper" className="d-flex flex-column mx-0">
                    <Header/>
                    <Component {...pageProps} />
                  </div>
                <div id="confirm"/>
                <div id="alert"/>
              </div>
              <div id="modal" />
              <div id="confirm" />
              <div id="alert" />
              <div id="toast" />
            </React.Fragment>
    );
  }
}

//
export default withRouter(MyApp)
