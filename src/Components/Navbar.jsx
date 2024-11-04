import { useState } from "react";
import { ImCross } from "react-icons/im";
import { RiMindMap } from "react-icons/ri";



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex h-[10vh] shadow-lg items-center px-4 bg-white relative">
            {/* Logo Section */}
            <div className="flex items-center w-1/4 md:w-1/6 h-full">
            <RiMindMap className="text-5xl"/>
                <h1 className="text-2xl font-semibold">
                    My<span className="text-orange-400">Mind</span>
                </h1>
            </div>

            {/* Centered Links */}
            <div className="hidden md:flex w-full justify-center items-center">
                <div className="flex space-x-10 items-center">
                    <a href="#home" className="hover:text-orange-400 transition duration-300">Home</a>
                    <a href="#about" className="hover:text-orange-400 transition duration-300">About</a>
                    <a href="#services" className="hover:text-orange-400 transition duration-300">Services</a>
                </div>
            </div>

            {/* Right-Aligned Buttons */}
            <div className="hidden md:flex gap-4 justify-center items-center">
                <button className="border border-green-400 text-xl px-4 py-2 rounded-xl hover:bg-green-300 hover:text-white transition duration-300 ease-in-out">
                    Login
                </button>
                <button className="bg-orange-400 text-white text-xl px-4 py-2 rounded-xl border border-transparent hover:border-orange-400 hover:text-orange-400 hover:bg-white transition duration-300 ease-in-out">
                    SignUp
                </button>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center ml-auto">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                    {isOpen ? <ImCross /> : '☰'}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-[10vh] left-0 w-full bg-white shadow-lg z-10 md:hidden">
                    <div className="flex flex-col items-center gap-4 py-4">
                        <a href="#home" className="w-full text-center py-2 hover:bg-gray-100">Home</a>
                        <a href="#about" className="w-full text-center py-2 hover:bg-gray-100">About</a>
                        <a href="#services" className="w-full text-center py-2 hover:bg-gray-100">Services</a>
                        <button className="border border-green-400 text-xl w-[90%] py-2 rounded-xl hover:bg-green-300 hover:text-white transition duration-300">
                            Login
                        </button>
                        <button className="bg-orange-400 text-white text-xl w-[90%] py-2 rounded-xl hover:border-orange-400 hover:text-orange-400 hover:bg-white transition duration-300">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
