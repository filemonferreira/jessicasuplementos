import { Link, Outlet, useLocation } from "react-router-dom";
import { TbLogout, TbMenu2, TbMessage, TbSearch, TbTimeline, TbUserCircle } from 'react-icons/tb'
import { IoIosNotifications } from 'react-icons/io'
import { BsAppIndicator, BsChatLeftDots, BsHandbag, BsHouse, BsTags } from 'react-icons/bs'
import logo from '../assets/logo.png'
import { useAuth } from "../context/AuthProvider/useAuth";
import { Spinner } from "flowbite-react";


export function UserLayout() {
    const auth = useAuth()
    const location = useLocation()
    const { pathname } = location
    const myUrl = pathname.replace('/', '');


    function handleLogout() {
        auth.logout()
    }

    return (
        <div>
            {
                auth.loading && (
                    <div className="flex justify-center items-center bg-white w-full h-[100vh] z-20 fixed">
                        <Spinner
                            size="xl"
                            color="info"
                            aria-label="Carregando"
                        />
                    </div>
                )
            }

            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        <a href="#" title="home" className="flex justify-center">
                            <img src={logo} className="w-32" alt="tailus logo" />
                        </a>
                    </div>

                    <div className="mt-8 text-center">
                        <img src={auth.photo} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{auth.name}</h5>
                        <span className="hidden text-gray-400 lg:block">{auth.account_type}</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        <li>
                            <Link to="/my-account" aria-label="dashboard" className={`relative px-4 py-3 flex items-center space-x-4 rounded-md ${myUrl == 'my-account' ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'text-gray-600'}`}>
                                <BsHouse size={24} />
                                <span className="-mr-1 font-medium">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-account/my-orders" className={`px-4 py-3 flex items-center space-x-4 rounded-md  ${myUrl == 'my-account/my-orders' ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'text-gray-600'}`}>
                                <BsHandbag size={24} />
                                <span className="group-hover:text-gray-700">Minhas compras</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-account/cupom" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <BsTags size={24} />
                                <span className="group-hover:text-gray-700">Cupoms</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md">
                                <BsChatLeftDots size={24} />
                                <span className="group-hover:text-gray-700">Perguntas</span>
                            </a>
                        </li>

                        <li>
                            <Link to="/my-account/indication" className={`px-4 py-3 flex items-center space-x-4 rounded-md ${myUrl == 'my-account/indication' ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'text-gray-600'}`}>
                                <BsAppIndicator size={24} />
                                <span className="group-hover:text-gray-700">Indicados</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <TbTimeline />
                                <span className="group-hover:text-gray-700">Finance</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button onClick={handleLogout} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <TbLogout size={36} />
                        <span className="group-hover:text-gray-700">Sair</span>
                    </button>
                </div>
            </aside>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="sticky top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                            <TbMenu2 size={26} />
                        </button>
                        <div className="flex space-x-4">

                            <div hidden className="md:block">
                                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                        <TbSearch size={24} />
                                    </span>
                                    <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                                </div>
                            </div>

                            <button aria-label="search" className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                <TbUserCircle size={26} />
                            </button>
                            <button aria-label="chat" className="flex items-center justify-center w-10 h-10  rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <TbMessage size={26} />
                            </button>
                            <button aria-label="notification" className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <IoIosNotifications size={26} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-6 pt-6 2xl:container">
                    <div className=" border-gray-300 rounded-xl">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    )
}