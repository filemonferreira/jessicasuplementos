import { AiOutlineCheck } from "react-icons/ai";
import { FcApproval, FcAssistant, FcCurrencyExchange, FcShipped } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CardProduct } from "../components/CardProduct";
import { Pathers } from "../components/Parthers";
import { Slider } from "../components/Slider";
import { Testimonial } from "../components/Testimonial";
import sort from '../assets/sort.jpg'
import { gql, useMutation, useQuery } from "@apollo/client";
import { LOGIN_MUTATION } from "../lib/express";
import { useAuth } from "../context/auth";

const GET_PRODUCTS_QUERY = gql`
    query {
        products(orderBy: createdAt_DESC, stage: PUBLISHED) {
          id
          title
          description
          price
          supplementformat
          slug
          photo {
            id
            url
          }
        }
      }
`

interface GetProductQueryResponse {
    products: {
        id: string;
        title: string
        description: string;
        price: string;
        supplementformat: string;
        slug: string;
        photo: {
            id: string;
            url: string;
        }
    }[]

}

interface LOGIN {
    token: string;
}
export function Home() {
    const { data } = useQuery<GetProductQueryResponse>(GET_PRODUCTS_QUERY);
    const user = useAuth();
    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            name: "filemon",
            email: "filemonfl@hotmail.com",
            password: "1sa24s58a7s458as7a8s"
        },
        onCompleted(login: LOGIN) {
            localStorage.setItem("brasil", login.token)
            alert(`Login: ${login.token}`)
        }
    })

    function handleLogin() {
        login
    }
    return (
        <>

            <Slider />


            <div className="max-w-7xl px-4 md:px-0 mx-auto py-6 sm:px-6 lg:px-8 flex flex-col">
                {/* <!-- Replace with your content --> */}
                <p className="text-orange-500 text-sm ">Aproveite</p>
                <strong className="text-gray-900 text-3xl uppercase">Produto em destaques {user?.name}</strong>
                <span className="border border-gray-300 mb-6"></span>

                <div className="flex flex-wrap">
                    {
                        data?.products.map(product => {
                            return (
                                <CardProduct key={product.id} data={product} />
                            )
                        })
                    }


                </div>

            </div>

            <div className="max-w-7xl mx-auto py-6 px-4 md:px-0 sm:px-6 lg:px-8 flex flex-col">
                <p className="text-orange-500 text-sm ">Conheça</p>
                <strong className="text-gray-900 text-3xl mb-1">Nossos Serviços</strong>
                <span className="border border-gray-50 mb-6"></span>

                <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex bg-gray-50 w-full md:w-96 rounded p-6 items-center">
                        <FcShipped size={70} />
                        <div className="ml-4">
                            <strong className="text-blue-600 text-2xl">Frete Gratis</strong>
                            <p className="font-semibold">Nosso loja entrega com frete gratis</p>
                        </div>
                    </div>

                    <div className="flex bg-gray-50 w-full md:w-96 rounded p-6 items-center">
                        <FcAssistant size={70} />
                        <div className="ml-4">
                            <strong className="text-blue-600 text-2xl">Atendimento</strong>
                            <p className="font-semibold">Tiramos toda suas duvida sobre suplementos</p>
                        </div>
                    </div>

                    <div className="flex bg-gray-50 w-full md:w-96 rounded p-6 items-center">
                        <FcCurrencyExchange size={56} />
                        <div className="ml-4">
                            <strong className="text-blue-600 text-2xl">Melhores preços</strong>
                            <p className="font-semibold">Produtos com qualidade e ótimos preços</p>
                        </div>
                    </div>

                </div>
            </div>



            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-6 bg-white">



                        <div className="max-w-md mx-auto pl-4 overflow-hidden md:max-w-full">
                            <div className="md:flex">
                                <div className="md:shrink-0">
                                    <img className="h-96 w-full object-contain md:h-full md:w-48" src={sort} alt="Man looking at item at a store" />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Kit suplemento</div>
                                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Cadastre-se e participe do sorteio kit suplementação</a>
                                    <p className="mt-2 text-slate-500 ">Que tal ganhar um kit suplementação completa só a <span className="text-orange-500">jessica suplementos</span> Sorteia um kit suplemento todo mês contendo.</p>

                                    <ul className="pt-4 mb-6">
                                        <li className="">01 CREATINA</li>
                                        <li className="">01 WHEY PROTEIN</li>
                                        <li className="">01 BCAA</li>
                                        <li className="">01 COQUETELEIRA</li>
                                    </ul>
                                    <Link to="" onClick={handleLogin} className="mt-4 p-2 bg-orange-500 rounded-md text-gray-100 hover:bg-orange-400 transition-colors">Participar</Link>
                                </div>
                            </div>
                        </div>




                        <h1 className="font-extrabold my-4 text-gray-700 text-2xl">Regras do sorteio</h1>
                        <ul>
                            <li className="flex bg-white text-gray-700 p-2 items-center rounded mb-1 uppercase shadow-md"><FcApproval size={24} /> <strong className="pl-2">Estar Cadastrado no site</strong></li>
                            <li className="flex bg-white text-gray-700 p-2 items-center rounded mb-1 uppercase shadow-md"><FcApproval size={24} /> <strong className="pl-2">Estar Seguindo o instagram</strong></li>
                            <li className="flex bg-white text-gray-700 p-2 items-center rounded mb-1 uppercase shadow-md"><FcApproval size={24} /> <strong className="pl-2">Ter 1 compra ativa na loja</strong></li>
                            <li className="flex bg-white text-gray-700 p-2 items-center rounded mb-1 uppercase shadow-md"><FcApproval size={24} /> <strong className="pl-2">Compartilhar foto Oficial do instagram</strong></li>

                        </ul>
                    </div>

                    <Pathers />
                    <Testimonial />
                </div>
            </main>
        </>
    )
}