
import React from "react"
import Header from "../components/Header"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
    <div>
        <Header />
        <div className="container">
            <div className="PageContent">
                {children}
            </div>
        </div>
    </div>
)

export default Layout;