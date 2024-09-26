import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink class="active" to="/">Home</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
        </div>
    )
}

export default Header