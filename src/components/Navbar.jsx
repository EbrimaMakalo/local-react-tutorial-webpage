import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { HiLanguage } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";

function Navbar () {
    return (
        <div className="bg-[#20232A] fixed">
            <div className="w-screen">
                <div className="bg-[#16181D] text-center justify-center sm:flex text-sm md:text-base font-bold py-[15px] sm:h-[45px] items-center">
                    <p className="text-white">Try out a preview of the new React Docs!</p>
                    <a href="" className="flex justify-center" target="_blank" rel="noopener noreferrer">
                        <p className="text-[#FDD641] pl-3 pr-2 text-sm md:text-lg pt-1"><FaHandPointRight /></p>
                        <p className="text-[#49DAFB]">beta.reactjs.org</p>
                    </a>
                </div>
                <div>
                    <ul className="text-white flex justify-evenly py-[3px] sm:h-[55px] items-center px-2 sm:px-5 md:px-10 lg:px-20 mx-5 md:mx-10 lg:mx-20">
                        <li className="flex mr-4 sm:mr-20 h-7 text-lg text-[#49DAFB] font-bold">
                            <a href="../Home.jsx" className="flex">
                                <img src={logo} alt="" />
                                <p className="hidden sm:block">React</p>
                            </a>
                        </li>
                        <li className="text-sm lg:text-base mr-3 md:mr-4">
                            <a href="" className="hover:text-[#49DAFB] focus:border-b-8 focus:border-b-[#49DAFB]">Docs</a>
                        </li>
                        <li className="text-sm lg:text-base mr-3 md:mr-4">
                            <a href="" className="hover:text-[#49DAFB]">Tutorial</a>
                        </li>
                        <li className="text-sm lg:text-base mr-3 md:mr-4">
                            <a href="" className="hover:text-[#49DAFB]">Blog</a>    
                        </li>
                        <li className="text-sm lg:text-base mr-10">  
                            <a href="" className="hover:text-[#49DAFB]">Community</a>
                        </li>
                        <li>
                            <div className="relative flex items-center">
                                <AiOutlineSearch className="w-5 h-5 absolute pointer-events-none"/>
                                <input
                                    type="search" 
                                    placeholder="Seach" 
                                    name="search"
                                    className="bg-transparent placeholder-[#707176] py-1 pl-6 mr-2 h-6 w-28 lg:w-auto focus-within:bg-[#424449] focus-within:outline-none focus-within:rounded" 
                                />
                            </div>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#49DAFB] text-sm md:mr-4 hidden sm:block sm:mr-2">v18.2.0</a>
                        </li>
                        <li>
                            <a href="" className="flex hover:text-[#49DAFB] text-sm md:mr-5">
                                <p className="text-2xl"><HiLanguage /></p>
                                <p className="ml-1 hidden sm:block">Languages</p>
                            </a>
                        </li>
                        <li className="hidden md:block">
                            <a href="" className="flex hover:text-[#49DAFB] text-sm">
                                <p>GitHub</p>
                                <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>            
        </div>
    )
}

export default Navbar;


