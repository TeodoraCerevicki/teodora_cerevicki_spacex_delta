import logo from './logo.svg';
import './App.css';

import bootstrap from 'bootstrap'

import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Post from './Post';
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);
  
  const client = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches'
  })
  
  const fetchPosts = async() => {
    const response = await client.get();
    setPosts(response.data);

    console.log(response.data);
  }
 
 useEffect(() => {
      fetchPosts()
   }, []);
   
   
  return (
		<main>
			<div className="container">
					<div className='row'>
						<div className='col-12 col-md-4 col-lg-3'>
								{posts.map((post, index) => 
									<Post 
										key={index} 
										mission_name={post.mission_name}
										launch_date_utc={post.launch_date_utc} 
										details={post.details}
									/>
								)}
						</div>
					</div>
			</div>
	</main>
  )
}

export default App;
