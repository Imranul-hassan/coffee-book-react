import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <Link to='/' className="btn btn-ghost text-xl font-bold">Cook_Book</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4 font-bold text-lg">
                <Link to='/'>Home</Link>
                <Link to='/coffees'>Coffees</Link>
                <Link to='/dashboard'>Dashboard</Link>
               
            </ul>
            </div>
            
      </div>
    );
};

export default Navbar;