import { useState } from 'react';
import { FaB } from "react-icons/fa6";
import Link from "../Components/DaisyNav/Link/Link";
import { HiMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" },
    ];

    return (
        <nav>
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {open ? 'open' : 'close'}
                <HiMenuAlt1 className="text-2xl"></HiMenuAlt1>
            </div>

            <ul className={`md:flex justify-center ${open ? '' : 'hidden'}`}>
                {routes.map(route => (
                    <li key={route.id}>
                        <Link route={route} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
