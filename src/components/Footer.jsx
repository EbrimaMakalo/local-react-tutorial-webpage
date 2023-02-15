import React from "react";
import facebookosi from "../assets/facebookopensource.png";
import { CiShare1 } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="w-full sm:w-2/3 h-[610px] bg-[#20232A] mb-0 mt-[100px] text-white pt-10 text-sm">
            <div className="flex w-3/4 float-right">
                <div className="mr-10">
                    <div>
                        <a href=""><img src={facebookosi} alt="/" className="h-10 mb-3 " /></a>
                        <p className=" text-[#a6a6a6]">Copyright © 2023 Meta Platforms, Inc.</p>
                    </div>
                </div>
                <div className="mr-20">
                    <div className="">
                        <h1 className="pb-4 text-[#a6a6a6] font-bold">DOCS</h1>
                        <ul className="space-y-2">
                            <li><a href="" className="hover:text-[#49DAFB]">Installation</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]">Main Concepts</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]">Advanced Guides</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]"> API Reference</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]"> Hooks</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]">Testing</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]"> Contributing</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <h1 className="pb-4 text-[#a6a6a6] font-bold">COMMUNITY</h1>
                        <ul className="space-y-2">
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Code of Conduct</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li><a href="" className="hover:text-[#49DAFB]">Community Resources</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="pb-4 text-[#a6a6a6] font-bold">CHANNELS</h1>
                        <ul className="space-y-2">
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>GitHub</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Stack Overflow</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Discussion Forums</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Reactiflux Chat</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>DEV Community</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Facebook</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Twitter</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-[68px]">
                        <h1 className="pb-4 text-[#a6a6a6] font-bold">MORE</h1>
                        <ul className="space-y-2">
                            <li><a href="" className="hover:text-[#49DAFB]">Tutorial</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]">Blog</a></li>
                            <li><a href="" className="hover:text-[#49DAFB]">Acknowledgements</a></li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>React Native</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Privacy</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex hover:text-[#49DAFB]">
                                    <p>Terms</p>
                                    <p className="text-gray-400 pl-1 pt-1"><CiShare1 /></p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;