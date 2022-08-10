import { Carousel } from "flowbite-react";
import slider1 from '../assets/Propaganda.jpg'

export function Slider() {
    return (
        <div className="flex bg-[#ebebeb] h-96 sm:h-64 xl:h-80 2xl:h-[550px] items-center justify-center w-full">
            <div className="flex h-96 w-[1200px]">
                <Carousel>
                    <img
                        src={"https://paguemenos.vtexassets.com/assets/vtex.file-manager-graphql/images/877bc34f-c882-4c3f-8630-3bcc058e98fd___1a147d4cfb28a53aee87fc8cd9ae2436.png"}
                        alt="..."
                        className="object-contain"
                    />
                    <img
                        src={slider1}
                        alt="..."
                    />
                    <img
                        src="https://images.tcdn.com.br/img/img_prod/672331/1646603690_banner_integralmedica.png"
                        alt="..."
                    />
                    <img
                        src="https://shopfitsuplementos.com/wp-content/uploads/2021/12/1-banINTEGRAL_creatine%20(1).jpg"
                        alt="..."
                    />
                    <img
                        src="https://integralmedica.vteximg.com.br/arquivos/ids/163669/whey-protein-banner-integralmedica-2.jpg?v=637825407035100000"
                        alt="..."
                    />
                </Carousel>
            </div>
        </div>
    )
}