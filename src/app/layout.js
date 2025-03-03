'use client'

import { ParallaxProvider } from "react-scroll-parallax";
import { MDXProvider } from "@mdx-js/react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MDXComponentMapping from '../components/MDXComponentMapping';
import "./styles/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
    return (
        <html>
            <body>
                <ParallaxProvider>
                    <MDXProvider components={MDXComponentMapping}>
                        {/* <Header /> */}
                            <div className="layout__content">{children}</div>
                        <Footer />
                    </MDXProvider>
                </ParallaxProvider>
            </body>
        </html>
    );
}

export default Layout;