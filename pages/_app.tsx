import App from "next/app";
import React from "react";
import "../project/polyfill";
import "../project/project-components";
import Header from "../components/Header";
import "../styles/styles.scss";
import {withRouter} from 'next/router';


class MyApp extends App<{}> {

    static getInitialProps = async ({Component, ctx}) => {
        let pageProps;

        // todo: this shouldn't happen for static resources
        if (ctx.pathname === "/_error" || !ctx.pathname) {
            return {};
        }

        // Only use this function if you are using SSR, then this will retrieve the users token and perform

        if (Component?.getInitialProps) {
            // Wait for pages to complete any async getInitialProps
            pageProps = await Component.getInitialProps({ctx});
        }

        return {pageProps};
    }

    render() {
        const {Component, pageProps} = this.props;
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
                <div id="modal"/>
                <div id="confirm"/>
                <div id="alert"/>
                <div id="toast"/>
            </React.Fragment>
        );
    }
}

//
export default withRouter(MyApp)
