import { useEffect, SyntheticEvent, useState, FormEvent } from "react"
import { api } from "../services/api"
import { FaRegUserCircle } from 'react-icons/fa'
import { MdErrorOutline } from 'react-icons/md'
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Label, TextInput } from "flowbite-react"
import { useQuery } from "@apollo/client"
import { GET_TYPE_CLIENT_QUERY } from "../lib/express"
import { GetClientTypeResponse } from "../lib/types"

interface UserProps {
    id: string
    name: string
    photo: string
    account_type: string
    indicated_code: string
}

export function CreateAccount() {
    const { data } = useQuery<GetClientTypeResponse>(GET_TYPE_CLIENT_QUERY)

    const MySwal = withReactContent(Swal)
    const [values, setValues] = useState({
        id_indicated: 0,
        name: '',
        last_name: '',
        email: '',
        phone: '',
        identity: '',
        type: 'cliente',
        sexo: '',
        password: '',
        repeat_password: ''


    })
    const [photo, setPhoto] = useState('')
    const [selected, setSelected] = useState<File>()
    const [error, setError] = useState('');
    const { code_indicated } = useParams()
    const [loading, setLoading] = useState(false)
    const [userIndicated, setUserIndicated] = useState<UserProps[]>([])

    async function LoadUserIndication() {

        const config = {
            headers: {
                'X-API-Key': 'amVzc2ljYXN1cGxlbWVudG9z',
            },
        }
        try {
            const userId = code_indicated;
            const response = await api.get(`/new_client/${userId}`, config);
            if (response.data.error) {
                MySwal.fire(
                    response.data.type,
                    response.data.message,
                    'error'
                )
                return
            }

            setUserIndicated(response.data);
            setValues({ ...values, id_indicated: response.data[0].id })

        } catch (error) {
            console.log(error)

        }
    }

    function resetForm() {
        setValues({
            ...values,
            id_indicated: 0,
            name: '',
            last_name: '',
            email: '',
            phone: '',
            identity: '',
            type: 'cliente',
            sexo: '',
            password: '',
            repeat_password: ''

        })
        setPhoto('');
    }

    function selectType(value: string) {
        setValues({ ...values, type: value })
    }

    function selectSexo(value: string) {
        setValues({ ...values, sexo: value })
    }

    async function handleSaveClient() {
        setLoading(true)
        event?.preventDefault()


        if (!selected) {
            MySwal.fire(
                'Foto',
                'Selecione uma foto sua',
                'error'
            )
            setLoading(false)
            return
        }

        const formData = new FormData()
        try {
            const config = {
                headers: {
                    'X-API-Key': 'amVzc2ljYXN1cGxlbWVudG9z',
                    'content-type': 'multipart/form-data'
                },
            }

            formData.append('id_indicated', values.id_indicated.toString())
            formData.append('name', values.name);
            formData.append('last_name', values.last_name);
            formData.append('email', values.email)
            formData.append('phone', values.phone)
            formData.append('identity', values.identity)
            formData.append('type', values.type)
            formData.append('sexo', values.sexo)
            formData.append('password', values.password)
            formData.append('photo', selected!);

            if (values.password != values.repeat_password) {
                MySwal.fire(
                    'Senha',
                    'Senha e confirmar senha diferente.',
                    'error'
                )
                setLoading(false)
                return;
            }

            const response = await api.post('/new_client', formData, config);

            if (response.data.error) {
                MySwal.fire(
                    response.data.type,
                    response.data.message,
                    'error'
                )
                setLoading(false)
                return
            }

            resetForm()

            MySwal.fire({
                title: <strong>Parabéns</strong>,
                html: <i>Seu cadastro foi realizado com sucesso!</i>,
                icon: 'success'
            })

            setLoading(false)
        } catch (error) {
            console.log('ERROR', error)
            setLoading(false)
        }
    }

    async function onChangeFile(event: HTMLInputElement) {
        const file = event.files;
        if (file === null) {
            setPhoto('');
            return;
        }

        setSelected(file[0])
        setPhoto(file.length > 0 ? URL.createObjectURL(file[0]) : '');
    }


    useEffect(() => {
        code_indicated && LoadUserIndication();
    }, []);


    return (
        <>
            <header className="bg-white shadow pt-16">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Formulario de Cadastro</h1>
                </div>
            </header>
            <main>
                <div className="bg-white my-6 rounded max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">

                        {
                            userIndicated.length > 0 && userIndicated.map(item => {
                                return (
                                    <div key={item.id} className="flex mb-12  p-2 px-6 bg-white shadow-md rounded-md items-center justify-between">
                                        <div className="flex items-center">
                                            <img className="object-cover w-16 h-16 rounded-full"
                                                src={item.photo} alt="profile photo" />
                                            <div className="flex flex-col ml-4">
                                                <strong className="text-green-500 text-1xl sm:text-2xl">{item.name}</strong>
                                                <span className="text-gray-900 uppercase ">{item.account_type}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <strong className="uppercase text-green-500 text-sm sm:text-2xl">CODIGO INDICADO</strong>
                                            <strong className="text-green-400 uppercase text-center text-sm">{item.indicated_code}</strong>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <form method="POST" onSubmit={handleSaveClient}>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <Label
                                        htmlFor="base"
                                        value="NOME"
                                    />
                                    <TextInput
                                        id="base"
                                        type="text"
                                        sizing="md"
                                        value={values.name}
                                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                                        required
                                    />

                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <Label
                                        htmlFor="base"
                                        value="SOBRENOME"
                                    />
                                    <TextInput
                                        id="base"
                                        type="text"
                                        sizing="md"
                                        value={values.last_name}
                                        onChange={(e) => setValues({ ...values, last_name: e.target.value })}
                                        required
                                    />

                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <Label
                                        htmlFor="base"
                                        value="E-MAIL"
                                    />
                                    <TextInput
                                        id="base"
                                        type="email"
                                        sizing="md"
                                        value={values.email}
                                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                                        required
                                    />

                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <Label
                                        htmlFor="base"
                                        value="WHATSAPP"
                                    />
                                    <TextInput
                                        id="base"
                                        type="tel"
                                        sizing="md"
                                        value={values.phone}
                                        onChange={(e) => setValues({ ...values, phone: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>


                            <div className="relative z-0 mb-6 w-full group">
                                <Label
                                    htmlFor="base"
                                    value="CPF"
                                />
                                <TextInput
                                    id="base"
                                    type="number"
                                    sizing="md"
                                    value={values.identity}
                                    onChange={(e) => setValues({ ...values, identity: e.target.value })}
                                    required
                                />

                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <Label
                                    htmlFor="base"
                                    value="SENHA"
                                />
                                <TextInput
                                    id="base"
                                    type="password"
                                    sizing="md"
                                    value={values.password}
                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <Label
                                    htmlFor="base"
                                    value="CONFIRMAR SENHA"
                                />
                                <TextInput
                                    id="base"
                                    type="password"
                                    sizing="md"
                                    value={values.repeat_password}
                                    onChange={(e) => setValues({ ...values, repeat_password: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <label className="peer-focus:font-medium absolute mb-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">Tipo do cliente</label>
                                    <select
                                        value={values.type}
                                        onChange={(e) => selectType(e.target.value)}
                                        name="account_type" className="w-full p-2 mt-2 uppercase border-b-2 border-gray-300 outline-hidden rounded">
                                        {
                                            data?.clientTypes.map(item => {
                                                return (
                                                    <option key={item.id} value={item.type} className="uppercase">{item.type}</option>

                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="relative z-0 mb-6 w-full group">
                                    <label className="peer-focus:font-medium absolute mb-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">SEXO</label>
                                    <select
                                        value={values.sexo}
                                        onChange={(e) => selectSexo(e.target.value)}
                                        name="sexo" className="w-full p-2 mt-2 border-b-2 border-gray-300 outline-hidden rounded">
                                        <option value="M">HOMEM</option>
                                        <option value="F">MULHER</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center shadow-md p-4 rounded-md">
                                <div className="shrink-0">
                                    {photo ? <img className="object-cover w-16 h-16 rounded-full"
                                        src={photo} alt="profile photo" />
                                        :
                                        <FaRegUserCircle size={56} className="text-gray-400" />
                                    }
                                </div>
                                <label className="block ml-4">
                                    <span className="sr-only">File</span>
                                    <input type="file"

                                        onChange={(event: SyntheticEvent) => onChangeFile(event.currentTarget as HTMLInputElement)}
                                        accept="image/png, image/jpeg, image/gif"
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                </label>
                            </div>
                            {
                                error && (
                                    <div className="flex bg-orange-200 border border-l-4 border-red-500 rounded p-2 mt-4 items-center">
                                        <MdErrorOutline size={24} className="text-red-500 mr-2" />
                                        <strong className="text-red-500 text-md uppercase">{error}</strong>
                                    </div>
                                )
                            }

                            <button type="submit" disabled={loading} className="disabled:bg-gray-500 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-10 md:mt-10 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Finalizar Cadastro</button>
                        </form>
                        <div className="mb-20"></div>
                    </div>
                </div>
            </main>
        </>


    )
}