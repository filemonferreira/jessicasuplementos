interface Props {
    data: {
    id: string;
    title: string;
    description: string;
    price: string;
    supplementformat: string;
    slug: string;
    photo: {
        id: string;
        url: string;
    }
    }
    
}

export function CardProduct(product: Props) {
    return (
        <div className="m-2 w-full md:w-72 bg-white drop-shadow-md rounded-lg flex flex-col justify-center items-center">
            <img className="object-cover rounded-tl-lg rounded-tr-lg  h-56"
            src={product.data.photo.url} />
            <div className="px-5 py-3 space-y-2">
                <h3 className="text-lg whitespace-pre">{product.data.title}</h3>
                <div className="flex flex-col items-start justify-end">
                    <div className="space-x-2">
                        <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">Creatina</span>
                        <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">Promoção</span>
                    </div>
                    <p className="space-x-2">
                        <span className="text-2xl font-semibold">R$ {product.data.price}</span>
                        <span className="text-sm line-through text-gray-500">R$ 139,00</span>
                        <span className="text-sm text-red-700">40% off</span>
                    </p>
                    <div className="flex justify-between items-center pt-3 pb-2">
                        <a href="#"
                            className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">
                            Adicionar Carrinho
                        </a>

                        <a href="#" title="Add to Favorites"
                            className="text-2xl text-gray-300 hover:text-red-500 duration-300">&hearts;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}