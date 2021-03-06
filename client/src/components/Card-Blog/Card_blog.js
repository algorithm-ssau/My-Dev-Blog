import React from 'react';
import './Card-blog.css';
import like from './images/like.png'
import mark from './images/mark.png'
import {Link, useRouteMatch} from 'react-router-dom'


export const Cardblog = ({id, title,description,author,likes,marks}) => {
    let match = useRouteMatch();
    
    return(
        <>
        <Link to = {`${match.url}/${id}`} className="card-link">
        <div className="card">
            <div className="card-content">
                <div className="card-head">{title}</div>
                <div className="card-text ">{description}</div>
                <div className="card-info"> 
                    <div className="card-icons">
                        <img src={mark} alt='mark' ></img>
                        {marks}
                        <img src={like} alt='like'></img>
                        {likes}
                    </div>
                    <div className="card-author">{"Author: " + author}</div>
                </div>
            </div>
        </div>
        </Link>
        </>
    );
}