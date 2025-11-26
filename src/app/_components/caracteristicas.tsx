// Componente para exibir um carrossel das características da empresa
// Criamos uma array fora do componente (const caracteristicas = []), com objetos contendo os tipo de informações básicas que se repetem

'use client'

import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import { format } from 'path'

const caracteristicas = [
    {
        title: "Banho e tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem do animal",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações"
    },
    {
        title: "Consulta veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar do animal.",
        duration: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre consultar veterinária e gostaria de mais informações"
    },
    {
        title: "Taxi pet",
        description: "Serviço de transporte para levar e buscar pets no petshop",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre taxi pet e gostaria de mais informações"
    },
    {
        title: "Taxi pet",
        description: "Serviço de transporte para levar e buscar pets no petshop",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre taxi pet e gostaria de mais informações"
    },
    {
        title: "Taxi pet",
        description: "Serviço de transporte para levar e buscar pets no petshop",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre taxi pet e gostaria de mais informações"
    }
]

export default function NossasCaracteristicas() {

// Hooks do EmblaCarousel, o const exporta o emblaRef e emblaApi, slidesToScroll é a quantidade de itens no carrossel, breakpoints é onde configuramos para 3 scrolls para telas maiores.
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints:{
            "(min-widht: 768px)": { slidesToScroll: 3 }
        }
    })
    
    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-[#E3D5C2] py-16">
            <div className="container mx-auto px-4">
                
                <h2 className="text-4xl font-bold mb-12">Nossas características</h2>

                <div className="relative">
                    {/* Busca o carrossel com o emblaRef, determina onde será o carrossel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {/* Percorre o array caracteristicas com o map, usando o item e index como parametros e retornando () um elemento html */}
                            {caracteristicas.map((item, index) => (
                                // O flex escrito dessa forma, iniciará a div ocupando 100% do espaço, o outro exemplo divide o espaço para 3 em telas maiores
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    
                                    <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        {/* flex-1 pega a tela inteira */}
                                        <div className="flex-1 flex items-start justify-between">
                                            
                                            <div className="flex gap-3">

                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>

                                            </div> 

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-5 h-5" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a 
                                                href="#"
                                                className="flex items-center justify-center gap-2 hover:bg-indigo-500 px-4 py-1 rounded-md duration-300"
                                            >
                                                <WhatsappLogoIcon className="w-5 h-5" />
                                                Entrar em contato
                                            </a>

                                        </div>

                                    </article>

                                </div>
                            ))}

                        </div>
                    </div>
                    
                    {/* Botão para voltar */}
                    <button 
                        onClick={scrollPrev}
                        className="bg-amber-100 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    >
                        <ChevronLeft
                            className="w-6 h-6 text-gray-600"
                        />
                    </button>
                    {/* Botão para avançar */}
                    <button 
                        onClick={scrollNext}
                        className="bg-amber-100 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                    >
                        <ChevronRight
                            className="w-6 h-6 text-gray-600"
                        />
                    </button>

                </div>

            </div>
        </section>
    )
}