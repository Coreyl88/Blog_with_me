import Header from "./components/Header";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import CreateBlog from "./components/CreateBlog";
import BlogDetail from "./components/BlogDetail";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/create" element={<CreateBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
