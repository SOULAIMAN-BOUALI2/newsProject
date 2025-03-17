import React, { useEffect, useState } from 'react'
import { Newsitems } from './Newsitems';
//8a0cd3f93da24d118448bf950d51f7a1
export const Newsbouard = () => {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));

  },[])
  return (
    <div className='container'>
        <h2 className="text-center">   actualités <span className="bg-danger badge text-light"> récentes   </span></h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {articles.map((news,index)=>{
              <div key={index} className="card" style={{ height: '400px' }}></div>
              return <Newsitems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })} 
        </div>
    </div>
  )
}
