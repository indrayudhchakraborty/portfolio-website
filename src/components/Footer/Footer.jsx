import Link from "next/link";
import './Footer.scss'
import { useState } from "react";
const Footer = () => {
    const [mode, setMode] = useState("auto");
    return (
        <div className="pt-12">
            <footer id="footer" className="relative z-50 dark:bg-white-900 pt-24" style={{backgroundColor: "black", padding: "0", border: "none"}}>
                <div className="border-b border-white-200 dark:border-white-700 py-16">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="#proj">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">Projects</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#abt">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">About</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="https://cdnb.artstation.com/p/assets/images/images/041/886/411/smaller_square/man-cakefinalforthelasttime.jpg?1632976152">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">Cake</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="https://www.artstation.com/artwork/w6RxOV">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">Jericho</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <a href="https://www.artstation.com/artwork/WKABYJ" className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                                                Earth
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="https://in.pinterest.com/pin/626633735646369812/">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">Moon</a>
                                            </Link>
                                        </li>

                                        <li className="mt-6">
                                            <Link href="https://in.pinterest.com/pin/626633735651428370/">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">Fruits</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="https://in.pinterest.com/pin/626633735646729781/">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">Imaginary Planet</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <a href="https://cdna.artstation.com/p/assets/images/images/041/886/362/smaller_square/man-creepyhosp.jpg?1632976009" className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                                                Creepy Hospital
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                    <div className="flex items-center mb-6">
                                        <a href="https://www.artstation.com/anamatico">
                                            <div className="text-white-800 dark:text-white-50 cursor-pointer hover:text-brand dark:hover:text-brand ">
                                                 My Artstation
                                            </div>
                                        </a>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 flex flex-col justify-center items-center">
                    <p className="text-xs lg:text-sm leading-none text-white-900 dark:text-white-50">2021 srihanchakraborty. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
