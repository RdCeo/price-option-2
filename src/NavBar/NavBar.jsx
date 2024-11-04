import { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import Link from "../Components/Link/Link";

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
    <nav className="bg-yellow-200 p-6">
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <HiOutlineX /> : <HiMenuAlt1 />}
      </div>

      <ul
        className={`md:flex duration-1000 justify-center text-center md:static absolute w-full left-0
           ${open ? "top-20 bg-slate-600" : "-top-96"} `}
      >
        {routes.map((route) => (
          <li key={route.id} className="md:mx-4 my-2 md:my-0">
            <Link route={route} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
