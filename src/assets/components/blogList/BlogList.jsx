import { Link } from 'react-router-dom';
import './bloglist.css';

const BlogList = (blog) => {
    return ( 
        <>
        <div>
            <img src={blog.img_url} alt={blog.title} width="300" />
            <h2>{blog.title}</h2>
            <button>
                <Link to={`/post/${blog.id}`}>Read more</Link>
            </button>
        </div>
        </>

     );
}
 
export default BlogList;