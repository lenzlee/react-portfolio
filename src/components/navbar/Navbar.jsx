import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    return(
        <>
        <nav className="navbar">
            <Link to = '/'>Home</Link>
            <Link to = '/Myprojects'>Projects</Link>
            <Link to = '/ToolBox'>Technical Toolbox</Link>
        </nav>
        </>
    )
}