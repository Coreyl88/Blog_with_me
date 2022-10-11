import Header from "./components/Header";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import CreateBlog from "./components/CreateBlog";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/create" element={<CreateBlog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
