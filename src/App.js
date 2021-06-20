import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {


  const [users, setUsers] = useState([]);

  const getUsers = async () => {
      const response = await fetch('https://restcountries.eu/rest/v2/name/nepal');
      setUsers(await response.json());

  }
  
  useEffect(() => {
          getUsers();
  }, []);


  return(
    <div>

  <h1 className="heading_style"> Rishav Kumar (Jsonplaceholder API) </h1>


  {
      users.map((curElem) => {
          return (
            <div>

            <div className="cards">
              <div className="card">
              <img src={curElem.flag} alt="mypic" className="card_img" />
              <div className="card_info">
              <h3 className="card_id">  Name: {curElem.name}</h3>
              <h3 className="card_id"> Capital: {curElem.capital}</h3>
              <h3 className="card_id"> Population: {curElem.population}</h3>
              <h3 className="card_id"> NativeName: {curElem.nativeName}</h3>
              </div>
              </div>
            </div>
            </div>
          )

      })
  }

  </div>

  );
}

export default App
