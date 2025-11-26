// Componente para exibir um carrossel das características da empresa
// Criamos uma array fora do componente (const caracteristicas = []), com objetos contendo os tipo de informações básicas que se repetem

'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import { format } from 'path'
import fulano1 from '../../../public/images/pessoa1.jpg'
import fulano2 from '../../../public/images/pessoa2.jpg'
import fulano3 from '../../../public/images/pessoa3.jpg'


const depoimentos = [
    {
        content: "Gostei muito blalalblala",
        author: "Fulano 1",
        role: "Dono de restaurente",
        image: fulano1, 
    },
    {
        content: "Gostei muito aldkaskglald",
        author: "Fulano 2",
        role: "Dono de oficina",
        image: fulano2, 
    },
    {
        content: "Gostei muito dolalbalbkal",
        author: "Fulano 3",
        role: "Dono de consultório",
        image: fulano3, 
    },
]

export default function Depoimentos() {

// Hooks do EmblaCarousel, o const exporta o emblaRef e emblaApi, slidesToScroll é a quantidade de itens no carrossel, breakpoints é onde configuramos para 3 scrolls para telas maiores.
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })
    
    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-amber-400 py-16">
            <div className="container mx-auto px-4">
                
                <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Busca o carrossel com o emblaRef, determina onde será o carrossel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {/* Percorre o array caracteristicas com o map, usando o item e index como parametros e retornando () um elemento html */}
                            {depoimentos.map((item, index) => (
                                // O flex escrito dessa forma, iniciará a div ocupando 100% do espaço, o outro exemplo divide o espaço para 3 em telas maiores
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    
                                    <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                    
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes="96px"
                                                    className="object-cover rounded-full"
                                                />
                                            </div>

                                            <p className="text-gray-200">{item.content}</p>

                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>

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