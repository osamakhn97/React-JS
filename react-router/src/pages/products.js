import {Link} from 'react-router-dom';
const Products = ()=>{
    return(
        <div>
            
        <h1>Products Page</h1>
        <ul>
            <li>
                <Link to="products/p1">Car</Link>
            </li>
            <li>
                <Link to="products/p2">Bike</Link>
            </li>
            <li>
                <Link to="products/p3">Bat</Link>
            </li>
        </ul>
        </div>
    )
    }
    
    export default Products