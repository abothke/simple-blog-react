import BlogList from "../assets/components/blogList/BlogList.jsx";
import Header from "../assets/components/header/Header";
import blogData from "../data/blogData.js"
import "./blog.css";

const Blog = () => {
    return ( 
        <>
        <Header />
        <main>
            <div id="blogPosts">
                {blogData.map((blog, index) => (
                    <div key={index}>
                        <BlogList
                        title={blog.title}
                        img_url={blog.img_url}
                        id={blog.id}
                        />
                    </div>
                )
                )}
                
            </div>
        </main>
        </>
     );
}
 
export default Blog;