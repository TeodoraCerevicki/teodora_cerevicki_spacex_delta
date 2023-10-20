import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

// export default function Launch() {
//     const [posts, setPosts] = useState([]);

//     const client = axios.create({
//       baseURL: "https://api.spacexdata.com/v3/launches",
//     });
  
//     const fetchPosts = async () => {
//       const response = await client.get();
//       setPosts(response.data);
//     };
  
//     useEffect(() => {
//       fetchPosts();
//     });
//   return (
//     <div className="container">
//         <div className="row">

//           <div className="col-12">
//             <input className="search-field" type="search" placeholder="Search launch"/>
//           </div>
//           {posts.map((post, index) => (
//             <Card
//               key={index}
//               mission_name={post.mission_name}
//               launch_date_utc={post.launch_date_utc}
//               details={post.details}
//             />
//           ))}
//         </div>
//     </div>
//   )
// }

function Launch() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(res => {
      setData(res.data)
      setRecords(res.data)
    })
    .catch(error => console.log(error));
  }, [])

  const Filter = (event) => {
    const value = event.target.value;

    setRecords(data.filter(f => f.mission_name.toString().toLowerCase().includes(value)))
  }

return (
    <div className="container">
        <div className="row">

          <div className="col-12">
            <input onChange={Filter} className="search-field" type="text" placeholder="Search launch"/>
          </div>

          {records.map((item, index) => (
            <Card
              key={index}
              mission_name={item.mission_name}
              launch_date_utc={item.launch_date_utc}
              details={item.details}
            />
          ))}
        </div>
    </div>
  )
}


export default Launch