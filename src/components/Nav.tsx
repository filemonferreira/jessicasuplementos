import { useState } from "react";
import { BsBorderWidth } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export function Nav() {
    const [activeMenu, setActiveMenu] = useState(false)
    return (
        <div>
            <nav className="bg-gray-800 fixed z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-shrink-0">
                                <a href=""><img
                                    className="h-18 w-24 hover:w-56 hover:h-46 hover:mt-12 "
                                    src={logo}
                                    alt="Workflow"
                                /></a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Produtos
                                    </Link>

                                    <Link
                                        to="/pather"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Parceiros
                                    </Link>

                                    <Link
                                        to="my-account"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Minha conta
                                    </Link>

                                    <Link
                                        to="/create-account"
                                        className="text-gray-50 bg-orange-500 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        Cadastrar
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setActiveMenu(!activeMenu)}
                                type="button"
                                className="bg-gray-800 outline-none outline-0 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>

                                <BsBorderWidth size={24} color="#fff" /
                                >

                            </button>
                        </div>
                    </div>
                </div>


            </nav>

            {
                activeMenu && (
                    <div className="flex">
                        <div className="w-60 bg-gray-800 h-full z-20 fixed">
                            <div className="flex justify-between p-4 items-center">
                                <strong className="text-white">MENU</strong>
                                <button onClick={() => setActiveMenu(!activeMenu)}> <MdClose className="text-red-500" size={36} /></button>
                            </div>
                            <div className="md:hidden" id="mobile-menu">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link
                                        to="/"
                                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/products"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Produtos
                                    </Link>

                                    <Link
                                        to="/parthe"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Parceiros
                                    </Link>

                                    <Link
                                        to="/my-account"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Minha conta
                                    </Link>

                                    <Link
                                        to="/create-account"
                                        className="text-gray-300 text-center bg-orange-600 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/create-account"
                                        className="text-gray-300 text-center bg-orange-500 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Cadastrar
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <button onClick={() => setActiveMenu(!activeMenu)}><div className="bg-opacity-60 bg-gray-900 h-full w-full fixed  z-10 right-0 "></div></button>
                    </div>
                )
            }



        </div>
    );
}