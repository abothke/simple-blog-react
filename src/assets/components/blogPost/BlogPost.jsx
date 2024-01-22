import blogData from "../../../data/blogData";
import { useParams, Link } from "react-router-dom";
import Header from "../header/Header";

const BlogPost = () => {
    const blogId = useParams()

    const blogPost = blogData.filter((blog) => {
    return blog.id === Number(blogId.id)
})

    
    return ( 
        <>
        <Header />
        <div id="blogPost">
        <img src={blogPost[0].img_url} alt={blogPost[0].title} width="300" />
        <div id="blogTitle"><h1>{blogPost[0].title}</h1><p>{blogPost[0].published_date}</p></div>
        <p>{blogPost[0].description}</p>
        <p>by {blogPost[0].author}</p>
        </div>
        </>
     );
}
 
export default BlogPost;