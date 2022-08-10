import { FormEvent, useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { TbCopy } from "react-icons/tb";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { api } from "../../services/api";
import { IUser } from '../../context/AuthProvider/types'
import { Card } from "flowbite-react";

export function Indicated() {
    const [userIndicated, setUserIndicated] = useState([])
    const [values, setValues] = useState({
        indicated: ''
    })
    const [copyText, setCopyText] = useState('')
    const auth = useAuth();


    async function loadIndicated() {
        const config = {
            headers: {
                'X-API-Key': 'amVzc2ljYXN1cGxlbWVudG9z'
            }
        }
        const response = await api.get(`/indicated_list/${auth.id}`, config);
        console.log(response.data)

        if (response.data.error) {
            setUserIndicated([])
            return;
        }
        setUserIndicated(response.data)
        setCopyText('https://jessicasuplementos.com/create-account/' + auth.indicated_code)
        setValues({ ...values, indicated: 'https://jessicasuplementos.com/create-account/' + auth.indicated_code })
    }


    function handleCopy() {

        //textoCopiado.select();
        //textoCopiado.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText);
    }

    useEffect(() => {
        console.log('Iniciou')
        auth.id && loadIndicated()
    }, [auth.loading])

    return (
        <>
            <div className="bg-white w-full p-6 rounded mb-4">
                <div>
                    <h1 className="text-gray-600 uppercase font-bold">Link de indicado {auth.id}</h1>
                    <div className="flex items-center border border-blue-500 rounded">
                        <input type="text"
                            value={values.indicated}
                            onChange={(e) => setValues({ ...values, indicated: e.target.value })}
                            name="" placeholder={`https://jessicasuplementos.com/create-account/${auth.indicated_code}`}
                            className="rounded w-full outline outline-none focus:outline-none focus:outline-hidden border border-0"
                        />
                        <button className="p-2 rounded flex justify-center items-center w-28 text-blue-500 focus:outline-none"
                            onClick={handleCopy}
                        >
                            <TbCopy size={24} className="text-blue-500" />
                            Copiar
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className={`${userIndicated.length == 0 && 'bg-white p-4'} inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg`}>

                    {
                        userIndicated.length > 0 ?
                            (

                                <Card>
                                    <div className="mb-4 flex items-center justify-between">
                                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                            Indicados
                                        </h5>
                                        <a
                                            href="#"
                                            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Ver todos indicados
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {
                                                userIndicated.map((item: IUser) => {
                                                    return (

                                                        <li className="py-3 sm:py-4" key={item.id}>
                                                            <div className="flex items-center space-x-4">
                                                                <div className="shrink-0">
                                                                    <img
                                                                        className="h-10 w-10 rounded-full object-cover"
                                                                        src={item.photo}
                                                                        alt="Neil image"
                                                                    />
                                                                </div>
                                                                <div className="min-w-0 flex-1">
                                                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                                                        {item.name}
                                                                    </p>
                                                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                                        2 compras
                                                                    </p>
                                                                </div>
                                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                    <strong className={`${item.active === "active" ? 'bg-green-500' : 'bg-red-500'} p-1 rounded text-xs text-white uppercase`}>{item.active === "active" ? 'Ativo' : 'Não ativo'}</strong>
                                                                </div>
                                                            </div>
                                                        </li>


                                                    )
                                                })
                                            }

                                        </ul>
                                    </div>
                                </Card>

                            )
                            :
                            (
                                <h1>Nenhum indicado até o momento</h1>
                            )
                    }

                </div>
            </div>
        </>
    )
}