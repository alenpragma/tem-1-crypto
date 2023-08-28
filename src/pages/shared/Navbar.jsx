import { Link } from "react-scroll";
import { navLinks } from "../../components";
import HomeButton from "../navShared/HomeButton";
import Logo from "../navShared/Logo";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="max-w-full sticky top-0 lg:px-0 bg-[#ffff] px-5 z-[7000]">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <Logo />
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                            <HomeButton />
                            {navLinks.map((nav, i) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}
                                >
                                    <Link to={`${nav.id}`} className="font-semibold" smooth={true} duration={500}>
                                        {nav.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col justify-end items-center lg:hidden'>
                        <p onClick={() => setToggle((previous) => !previous)}>
                            {toggle ? <AiOutlineClose className="text-3xl"/> : <FiMenu  className="text-3xl"/>}
                            </p>
                        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#ffff] absolute top-20 right-0 mx-4 my-2 min-w-[300px] rounded-xl sidebar border`}>
                            <ul className='list-none flex flex-col justify-end items-center flex-1'>
                                <HomeButton />
                                {navLinks.map((nav, i) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} mr-10`}
                                    >
                                        <Link to={`${nav.id}`} className="font-semibold" smooth={true} duration={1000}>
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;