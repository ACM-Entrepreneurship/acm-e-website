import React from 'react'
import { Link } from "react-router-dom";
import "./pages.css";

function Page404() {
    return(
        <>
        <div className='PageNotFound'>
           <h1>404 Page Not Found</h1>
           <p>The page you are looking for does not exist.</p>
           <Link to="/"><button className='button-404'>Return Home</button></Link>
        </div>
        </>
    )
}

export default Page404