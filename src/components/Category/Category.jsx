import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {

    return (
     
        <div className="dropdown">
            <div className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
            </div>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link to="/category/street" className="dropdown-item">Street</Link></li>
                <li><Link to="/category/career" className="dropdown-item">Career</Link></li>
                <li><Link to="/category/mountain" className="dropdown-item">Mountain</Link></li>
                <li><Link to="/category/vintage" className="dropdown-item">Vintage</Link></li>
                
            </ul>
        </div>

    );
}

export default Category;     