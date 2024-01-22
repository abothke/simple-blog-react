import { Link } from "react-router-dom";
import Header from "../assets/components/header/Header";

const Home = () => {
    return ( 
    <>
    <Header />
    <main>
    <h2>Home</h2>
    <div>
        <h2>Welcome to my simple blog</h2>
        <button>
            <Link to="/blog">Go to articles</Link>
        </button>
    </div>
    </main>
    </>
    );
}
 
export default Home;