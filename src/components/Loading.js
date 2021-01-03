import React from 'react';
import LoadingGif from '../images/loading-arrow.gif';


const Loading = () => {
    return (
        <div className="loading">
            <h2>rooms data loading...</h2>
            <img src={ LoadingGif } alt="loading" />
        </div>
    );
};

export default Loading;
