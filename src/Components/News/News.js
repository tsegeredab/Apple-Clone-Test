import React,{useState,useEffect} from 'react';
//import "./News.css";
function News() {
const [AppleNews,addAppleNews] = useState([]);
useEffect (() => {
    fetch(
        
       "http://newsapi.org/v2/everything?q=apple&from=2021-01-06&sortBy=publishedAt&apiKey=20517fc321bb4b6d94f40adca9a85b42"
    )
    .then((response)  => response.json())
.then((data) => {
    console.log(data)
    const abi= data.articles;
    addAppleNews(abi)
})
},[])
console.log(AppleNews)
    return (
        <div className="allNewsWrapper">
            <div className="container">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12">
                    <div className="title-wrapper bold news-title-wrapper">
                   Latest News
                    </div>
                    </div>
                    {AppleNews?.map((singleNews)=> {
                let newsTitle = singleNews.title;
                let newsLink = singleNews.url;
                let newsImage = singleNews.urlToImage;
                let newsWrapper = (
                    <div className="col-sm-12 col-md-4">
                <div className="singleNewsWrapper">
                    <div className="newsThumbnail">
                      <a href={newsLink} target="_blank">
                        <img src={newsImage} />
                      </a>
                    </div>
                <div className="NewsInfoWrapper">
                    <div className="newsTitle"> 
                    <a href={newsLink} target="_blank">
                        {singleNews.title}
                    </a>
                  </div>
                  <div className="newsDesc">
                        {singleNews.description}
                      </div>
                  </div>
                  <div className="newsLink"> 
                    <a href={newsLink} target="_blank">
                    </a>
                  </div>
                   </div>
                 </div>   
                   );
                    return newsWrapper;
                    })}
                </div>
            </div>
        </div>
    )
}

    
export default News;
