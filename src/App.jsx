import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Blog from './pages/Blog'
import BlogPost from './assets/components/blogPost/BlogPost'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </>
  )
}

export default App
