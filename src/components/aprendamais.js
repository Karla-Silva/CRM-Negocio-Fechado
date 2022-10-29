import React, {useState, useEffect } from 'react';
import "../styles/aprenda.css"
import "../styles/index.css"
import Button from 'react-bootstrap/Button'

async function getArticles(){
  let response = await fetch('http://localhost:3000/api/articles.json')
  let data = await response.json()
  return data;
}

let novoIndex;

const Articles = () => {
  const [articles, setArticles] = useState([{}])
  
  useEffect(() => {
    getArticles().then(data => {
      setArticles(data['articles'])
    })
  }, [])
  
  const [index, setIndex] = useState(0)

  const proximo = () => {
    if (index<3){
      novoIndex=index+1
    }else{
      novoIndex=0
    }
    setIndex(novoIndex);
  } 

  return(
    <section id="aprendamais">
      <div className='d-flex'>
        <div className='text'>
          <h2 className="text-center">Aprenda mais!</h2>
          <div>
            <h2 className="text-center">{articles[index].name}</h2>
            <p><i>{articles[index].description}</i></p>
            <p>{articles[index].text}</p>
          </div>
        </div>
        <img src={articles[index].img} alt="ilustrações sobre negócios" className='images'></img>
      </div>
      <br></br>
      <div className='d-flex'>
        <Button variant="dark" onClick={proximo} className="button-black">Próximo</Button>
      </div>
    </section>
  )
}

export default Articles

/* <button onClick={proximo}>Próximo</button> */