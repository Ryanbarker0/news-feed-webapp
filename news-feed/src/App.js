import React from 'react';
import urls from '../src/articleSources'
import Header from './components/Header'
import NewsList from './components/NewsList'
import LeftSidebar from './components/LeftSidebar'
import moment from 'moment'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RightSideBar from './components/RightSideBar';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      urls: urls
      
    }
  }

  getArticles = url => {
    return fetch(url)
      .then(resp => resp.json())
      .then(items => {
        const array = [...this.state.articles]
        items.articles.forEach(article => array.push({
            source: article.source.name,
            title: article.title,
            description: article.description,
            url: article.url,
            image_url: article.urlToImage,
            published: moment(article.publishedAt).format('HH:mm, DD MMM')
        }))
        this.setState({
          articles: this.sortByDate(array)
        })
      })
  }

  sortByDate = array => 
   array.sort((a, b) => parseInt(b.published.split(':').join('').slice(0, 4)) - parseInt(a.published.split(':').join('').slice(0, 4)))
  

  setAllSourcesToOneArray = () => {
    const array = []
    this.state.articles.forEach(articles => articles.forEach(article => array.push(article)))
    console.log(array)
    this.setState({ articles: array })
  }

  getArticleData = () => {
    this.state.urls.map(url => 
      this.getArticles(url)
  )
    this.setAllSourcesToOneArray()
}


  componentDidMount() {
    this.getArticleData()
    this.setAllSourcesToOneArray()
  }

  render() {
    return (<div className='content'>
      <Header />
      <LeftSidebar />
      <NewsList articles={this.state.articles} />
      <RightSideBar />
    </div>);
  }
}