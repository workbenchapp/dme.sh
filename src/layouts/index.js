
import React from "react"
import Header from "../components/Header"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import iconsvg from '../images/icon.svg'

export default ({ children }) => (
    <div>
        <Header />
        <div className="container">
        <div className="PageContent">
        {children}
        </div>
        </div>
    </div>
)