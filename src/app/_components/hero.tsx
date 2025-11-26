import Galeria from './galeria-hero'


export function Hero(){
    return(
        <section className="bg-[#E3D5C2] relative overflow-hidden">
            
            <div className="container mx-auto py-16 px-4 relative">

                <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
                    <div>
                        <Galeria />
                    </div>

                    <div className="min-h-screen flex flex-col justify-center">
                        <h1 className="text-[#04204C] text-6xl font-bold mb-4 leading-20">
                            Pensando em <span className="border-b-5 border-[#04204C]" >construir</span> ou <span className="border-b-5 border-[#04204C]" >reformar</span>?
                        </h1>

                        <h2 className="text-[#04204C] text-4xl mb-4">
                            Nós podemos te ajudar!
                        </h2>

                        <p className="bg-[#04204C] text-[#E3D5C2] text-lg font-bold w-fit px-5 py-5">
                            Cuidamos de tudo para sua obra<br />do início ao fim.
                        </p>
                    </div>

                </article>

            </div>

        </section>
    )

}
