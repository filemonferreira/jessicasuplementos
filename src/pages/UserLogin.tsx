import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import logo from '../assets/logo.png'
import { useAuth } from "../context/AuthProvider/useAuth";
import { getTokenLocalStorage, getUserLocalStorage } from "../context/AuthProvider/util";

interface Props {
    email: string
    password: string
}
export function UserLogin() {
    const MySwal = withReactContent(Swal)
    const [values, setValues] = useState<Props>({
        email: 'filemonfl@hotmail.com',
        password: 'Admin@234589'
    });
    const auth = useAuth();
    const history = useNavigate();

    async function onFinish() {
        event?.preventDefault();
        try {

            await auth.authenticate(values.email, values.password);

            history('/my-account')


        } catch (error) {
            MySwal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Email ou senha invalido!',
                showConfirmButton: false,
                timer: 1500
            })

        }
    }


    useEffect(() => {
        const userLocal = getTokenLocalStorage();
        if (userLocal) {
            history('/my-account')
            console.log('existe oo token')
        }
    }, []);



    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Area Cliente</h2>

                            <p className="max-w-xl mt-3 text-gray-300">{values.email} - {values.password} Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex w-full justify-center mb-12">
                                <img src={logo} alt="" className="flex w-48" />

                            </div>
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Area do cliente</h2>

                            <p className="mt-3 text-gray-500 dark:text-gray-300">Faça login para acessar sua conta</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={onFinish} method="post">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">E-mail</label>
                                    <input type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} autoComplete="on" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm text-gray-600 dark:text-gray-200">Senha</label>
                                        <Link to="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Esqueceu sua senha?</Link>
                                    </div>

                                    <input type="password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} autoComplete="on" name="senha" id="password" placeholder="Digite sua senha" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Entrar
                                    </button>
                                </div>

                            </form>

                            <p className="mt-6 text-sm text-center text-gray-400">Ainda não tem uma conta? <Link to="/create-account" className="text-blue-500 focus:outline-none focus:underline hover:underline">Criar conta</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}