import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
var Layout = function Layout() {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    var basename = process.env.BASENAME || "";

    return React.createElement(
        "div",
        null,
        React.createElement(
            BrowserRouter,
            { basename: basename },
            React.createElement(
                ScrollToTop,
                null,
                React.createElement(Navbar, null),
                React.createElement(
                    Routes,
                    null,
                    React.createElement(Route, { element: React.createElement(Home, null), path: "/" }),
                    React.createElement(Route, { element: React.createElement(Demo, null), path: "/demo" }),
                    React.createElement(Route, { element: React.createElement(
                            "h1",
                            null,
                            "Not found!"
                        ) })
                ),
                React.createElement(Footer, null)
            )
        )
    );
};

export default injectContext(Layout);