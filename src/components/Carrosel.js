import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/bundle'
import CarroselConteudo from './CarroselConteudo'
import ImgMarketplace from '../images/Grupo-de-mascara-2417.png'
import ImgManagement from '../images/management.png'
import ImgCourier from '../images/couriers.png'
import ImgPayment from '../images/payment.png'
import 'swiper/css/pagination'

const Carrosel = () => {
  return (
    <div>
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        >
            <SwiperSlide>
                <CarroselConteudo title={'Pigz Marketplace'} descricao={'Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.'} imagem={ImgMarketplace}></CarroselConteudo>
            </SwiperSlide>
            <SwiperSlide>
                <CarroselConteudo title={'Pigz Gestão'} descricao={'Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.'} imagem={ImgManagement}></CarroselConteudo>
            </SwiperSlide>
            <SwiperSlide>
                <CarroselConteudo title={'Gestão de entregadores'} descricao={'A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.'} imagem={ImgCourier}></CarroselConteudo>
            </SwiperSlide>
            <SwiperSlide>
                <CarroselConteudo title={'Pagamento on-line'} descricao={'Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.'} imagem={ImgPayment}></CarroselConteudo>
            </SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export default Carrosel