const Navbar = () => {
    return (
        <div className="navbar lg:px-5 sm:px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm font-poppins dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className=" md:block hidden">
                    <a className="btn btn-ghost text-xl font-poppins text-white">Celvin<span className="text-[#07C65D]">Portfolio</span></a>
                </div>
            </div>
            <div className="navbar-center lg:hidden">
                <a className="btn btn-ghost text-xl font-poppins text-white">Celvin<span className="text-[#07C65D]">Portfolio</span></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu text-white menu-horizontal font-poppins px-1">
                    <li><a>Home</a></li>
                    <li><a>Project</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
