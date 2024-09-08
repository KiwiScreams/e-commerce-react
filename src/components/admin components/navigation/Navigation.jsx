import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
    return ( 
        <>
        <section className="admin-panel-navigation">
            <ul>
                <li><Link to="/admin/products">products</Link></li>
                <li><Link to="/admin/add">add</Link></li>
            </ul>
        </section>
        </>
     );
}
 
export default Navigation;