import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Launch() {
    const [posts, setPosts] = useState([]);

    const client = axios.create({
      baseURL: "https://api.spacexdata.com/v3/launches",
    });
  
    const fetchPosts = async () => {
      const response = await client.get();
      setPosts(response.data);
    };
  
    useEffect(() => {
      fetchPosts();
    });
  return (
    <div className="container">
        <div className="row">
          {posts.map((post, index) => (
            <Card
              key={index}
              mission_name={post.mission_name}
              launch_date_utc={post.launch_date_utc}
              details={post.details}
            />
          ))}
        </div>
    </div>
  )
}
