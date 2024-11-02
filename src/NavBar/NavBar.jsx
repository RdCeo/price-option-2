import { FaB } from "react-icons/fa6";
import Link from "../Components/DaisyNav/Link/Link";
import { HiMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" },
    ];


    return (
        <nav>
            <div className="flex justify-center">
                <HiMenuAlt1 className="md:hidden text-3xl"></HiMenuAlt1>
            </div>

            <ul className="md:flex justify-center">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;