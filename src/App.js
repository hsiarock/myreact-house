import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { FilterHouseTable } from './components/FilterHouseTable.js';
import { axios } from 'axios';


export default function App() {

  const DEMO_HOUSES = [
    { zip: "07060", address: "1 Linda Lane", price: "600,000"},
    { zip: "07060", address: "2 Linda Lane", price: "500,000"},
    { zip: "07060", address: "3 Linda Lane", price: "400,000"},
    { zip: "07030", address: "4 Linda Lane", price: "300,000"},
    { zip: "07030", address: "5 Linda Lane", price: "200,000"}
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
         //.then((response) => response.json())
         .then((resp) => {
            console.log(resp.data.data);
            setPosts(resp.data.data);
         })
         .catch((err) => {
            console.log(err.message);
         });
        }, []);


  return (
    <div>
      <h2>Axios library returns</h2>
      <ol>
         { 
          posts.map((item) =><li key={item?.userId}>{item?.title} - {item?.body}</li>)
         }
      </ol>
      <FilterHouseTable houses={DEMO_HOUSES} />;
    </div>
  )
}
