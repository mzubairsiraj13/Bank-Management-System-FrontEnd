import React from 'react'
import { articlesData } from '../Data/SampleData'
import Article from './Article';
import Carousel from './Carousel';

const ArticlesSection = () => {
    const articles = articlesData;
    const ArticleElements =  articles.map((article)=>
               (<Article key={article.title} articleImg={article.articleImg} title={article.title} description={article.description}/> )) 
             
           
        

  
  return (
    <section className="h-fit bg-white my-4 p-4">
        <Carousel carouselItems={ArticleElements}/>
    </section>
  )
}

export default ArticlesSection