
import React from "react"
import Header from "../components/Header"

import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
)