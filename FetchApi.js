import React from 'react'

function FetchApi () {



    const apiGet = () => {

        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-08-25&sortBy=publishedAt&apiKey=ad0ff359859a4da0b612fa3afa048cdd')
        .then((response)=>response.json())
        .then((json)=>console.log(json)
        
        )
    
    }


  return (

    <div>
        <h1>Weather Near Me </h1><br/>

        <button onClick={apiGet}>Fetch API</button>
        <br />
        
        </div>
  )
}

export default FetchApi