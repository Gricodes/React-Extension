import React from "react";

export const Loader = () => {
    return(
        <div className='loaderContainer'>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
    )
}