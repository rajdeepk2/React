import React from 'react';
import Card from './Card';
import './index.css';
import seriesData from './SeriesData';
function App() {

  function cardEle(currval){
            return(
              <Card
               imgsrc={currval.imgsrc}
               title={currval.title}
               sname={currval.sname}
               link={currval.link}
               />
            );
  }
  return (
    <>
     <h1 >Top 5 Netflix Series in 2020</h1>
     
     { seriesData.map(cardEle) }  
    </>

  );
}

export default App;
