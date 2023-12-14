import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    return(
        <nav className="navbar">
            <Link to = '/'>Home</Link>
            <Link to = '/Projects'>Projects</Link>
            <Link to = '/Contact'>Contact</Link>
        </nav>
    )
}