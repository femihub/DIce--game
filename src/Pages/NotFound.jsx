import React from "react"
import { Link } from "react-router-dom"

export default function NotFound () {
    return(
        <div className="btn-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            
                <Link 
                    to="/"
                    className="btn--home" 
                >
                    Return to home</Link>
        </div>
    )
}