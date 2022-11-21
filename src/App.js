import React, { useState, useEffect} from "react"
import './App.css';

function App({ login }){
  const [data, setData] = useState(null);
  const [loading,setloading] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
      if(!login) return;
      setloading(true);

      fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .then(()=> setloading(false))
        .catch(setError);
    },[login]);

    if(loading) return <h1>Loading...</h1>;
    if(error) 
      return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!data) return null;

      return <div>
        <h1>{data.name}</h1>
        <p>{data.info}</p>
        <p>{"github profile picture"}</p>
        <p>{data.location}</p>
        <img alt = {data.login} src = {data.avatar_url}/>
        <button onClick={printMessage1}>Default</button>;
        <button onClick={printMessage1}>Default</button>;

      </div>

}

function printMessage1(){
  alert('You have clicked the button1 O_o')
}
function printMessage2(){
  alert('You have clicked the button2 O_o')
}

export default App;
