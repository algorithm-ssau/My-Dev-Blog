import React from 'react';
import './Card-blog.css';
import like from './images/like.png'
import mark from './images/mark.png'
import {Link} from 'react-router-dom'


export const Cardblog = ({title,content,author,likes,marks}) => {
    return(
        <Link to = "/images/stock/thumb/fitbol.jpg" className="card-link">
        <div className="card">
            <div className="card-content">
                <div className="card-head">{title}</div>
                <div className="card-text ">{content}</div>
                <div className="card-info"> 
                    <div className="card-icons">
                        <img src={mark} alt='mark' ></img>
                        {marks}
                        <img src={like} alt='like'></img>
                        {likes}
                    </div>
                    <div className="card-author">{"Autor: " + author}</div>
                </div>
            </div>
        </div>
        </Link>
    );
}