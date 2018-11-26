import React from 'react'
import NewsCard from './NewsCard'
import NewsItem from './NewsItem'

const NewsList = props => {
    const { articles } = props
    return (<div className="news-container">
         { articles.map(article =>  <NewsCard article={article} /> ) } 
    </div>
    )
}

export default NewsList;