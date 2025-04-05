import { NavLink } from 'react-router';
export const NavBar = () => {
    return (
        <nav className="navigation bg-pink-800 text-white py-2">
            <ul>
                <li>
                    <NavLink to="/" className="inline-block text-sm py-2 px-4 cursor-pointer hover:text-pink-300">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/my-collection" className="inline-block text-sm py-2 px-4 cursor-pointer hover:text-pink-300">My Collection</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="inline-block text-sm py-2 px-4 cursor-pointer hover:text-pink-300">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}