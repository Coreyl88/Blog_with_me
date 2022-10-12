import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  const sendRequest = async () => {
    const res = await axios.get("http://localhost:4000/api/blog").catch(err => console.log(err));
    const data = res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then(data => setBlogs(data.blogs));
  },[])
  
  return (
    <div>Blogs</div>
  )
}

export default Blogs