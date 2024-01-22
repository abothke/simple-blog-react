import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../../img/header.jpg"

const Header = () => {
    return ( 
        <>
        <header style={{ backgroundImage: `url(${header})` }}>
            <h1>My Life</h1>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/Blog">Blog</Link>
            </button>
        </header>
        </>
     );
}
 
export default Header;
