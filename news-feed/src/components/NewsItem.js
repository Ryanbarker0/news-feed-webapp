import React from 'react'

const NewsItem = props => {
    const { article } = props
    return (
        <div className="news-item" >
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title"> { article.title } </h3>
                    <p className="card-text"> { article.description } </p>
                    <p className='card-text'>More Info At:<a href={article.url} target="_blank" className="card-link">{article.source}</a></p>
                </div>
                <div className='image-item'>
                    <img src={article.image_url} width='50px'></img>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;