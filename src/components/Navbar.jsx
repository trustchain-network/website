// @ts-nocheck
import React from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex items-center justify-between px-2 py-3 bg-white">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <img
                        src={Logo}
                        alt="logo image"
                        className="w-[100px] lg:w-[70%]"
                    />
                    <button
                        className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center " +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col xl:gap-x-[25px] md:gap-x-[15px] text-secondary font-normal sm:mx-auto sm:my-0 lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item text-sm lg:text-lg py-2 border-b-[1px] border-secondary lg:border-none ">
                            Features
                        </li>
                        <li className="nav-item text-sm lg:text-lg py-2 border-b-[1px] border-secondary lg:border-none ">
                            Our App
                        </li>
                        <li className="nav-item text-sm lg:text-lg py-2 border-b-[1px] border-secondary lg:border-none ">
                            Products
                        </li>
                        <li className="nav-item text-sm lg:text-lg py-2 border-b-[1px] border-secondary lg:border-none ">
                            Partner & Investors
                        </li>
                        <li className="nav-item text-sm lg:text-lg py-2 border-b-[1px] border-secondary lg:border-none ">
                            Meet The Team
                        </li>
                    </ul>
                    <button className="text-white px-4 py-2 text-lg bg-primary lg:px-6 lg:py-4 hidden lg:block rounded-[10px]">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </nav>
        // <div className="mx-[100px]">
        //     <div className="flex flex-row items-center justify-between h-[115px] ">
        //         <img src={Logo} alt="logo image" />
        //         <ul className="flex flex-row gap-x-[25px] text-secondary text-lg ">
        //             <li>Features</li>
        //             <li>Our App</li>
        //             <li>Products</li>
        //             <li>Partner & Investors</li>
        //             <li>Meet The Team</li>
        //         </ul>
        //         <button className="text-white text-lg bg-primary px-6 py-4 rounded-[10px]">
        //             Connect Wallet
        //         </button>
        //     </div>
        // </div>
    );
};

export default Navbar;
