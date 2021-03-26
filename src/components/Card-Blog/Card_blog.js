import React from 'react';
import '../Card-Blog/Card-blog.css';

export const Cardblog = () => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="card-head">Управление памятью в JS</div>
                <div className="card-text ">Статья об управлении памятью и принципах работы сборщика мусора, а также о том, как избежать самых распространенных видов утечек памяти.</div>
                <div className="card-info"> 
                    <div className="card-icons"></div>
                    <div className="card-autor">Автор: Chupaha777</div>
                </div>
            </div>
        </div>
    );
}