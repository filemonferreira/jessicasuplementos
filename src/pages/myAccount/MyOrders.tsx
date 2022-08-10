import { BsHandbag } from 'react-icons/bs'
import { FiEye } from 'react-icons/fi'
export function MyOrders() {
    return (
        <div className="flex flex-col mt-8">


            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                        <p className="font-bold">Todo seu relatorio Está aqui</p>
                        <p className="text-sm">Todos os items que você comprou está aqui.</p>
                    </div>
                </div>
            </div>

            <div className="grid space-x-1 lg:grid-cols-4 mb-4">
                <div className="flex px-4 py-4 bg-white border-2 border-gray-400 rounded items-center ">
                    <div className="flex h-14 w-14 rounded-full bg-green-400 items-center justify-center text-center">
                        <BsHandbag color="#fff" />
                    </div>
                    <div className="w-full">
                        <h3 className="text-2xl text-center text-green-500 font-extrabold">R$ 152.00</h3>
                        <p className="text-center text-gray-500 font-bold">Hoje</p>
                    </div>
                </div>
                <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
                    <h3 className="text-2xl text-center text-green-500 font-extrabold">R$ 300.00</h3>
                    <p className="text-center text-gray-500 font-bold">Mês</p>
                </div>
                <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
                    <h3 className="text-2xl text-center text-green-500 font-extrabold">R$ 1,000.00</h3>
                    <p className="text-center text-gray-500 font-bold">Todas as compras</p>
                </div>
                <div className="px-4 py-4 bg-white border-2 border-gray-400 rounded">
                    <h3 className="text-2xl text-center text-green-500 font-extrabold">R$ 129.00</h3>
                    <p className="text-center text-gray-500 font-bold">Indicados</p>
                </div>

            </div>


            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Name</th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Valor</th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Quantidade</th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Desconto</th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Total
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Detalhes
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-15">
                                            <img className="w-10 h-15" src="https://images.tcdn.com.br/img/img_prod/802225/no2_whey_protein_pote_size_up_598_1_20200823220357.jpg"
                                                alt="admin dashboard ui" />
                                        </div>

                                        <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900 uppercase">
                                                whey 100% synthesize sabor chocolate
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-500">R$ 119.00</div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    1
                                </td>

                                <td
                                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    5%
                                </td>
                                <td
                                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    R$ 113.05
                                </td>
                                <td
                                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    <FiEye size={24} />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}