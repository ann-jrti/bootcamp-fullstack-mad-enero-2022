import './style.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <h1>Minibar</h1>
            <div>
                <Link to='/cocktails'>Cocktails</Link>
                <Link to='/drinks'>Drinks</Link>
            </div>
             
            <h2>Switch theme</h2>
        </nav>
    )
}

export default Header;