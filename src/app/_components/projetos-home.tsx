// Qaundo utlizamos a propriedade "fill", a imagem tenta preencher tudo, mas ao adicionarmos a propriedade "relative" na div pai, a imagem se delimita apenas ao espaço da div
import Image from "next/image";
import { CursorClickIcon } from "@phosphor-icons/react/dist/ssr";
import hSmartImg from "../../../public/images/homem-celular.jpg"
import mSmartImg from "../../../public/images/mulher-celular.jpg"


export default function ProjetosHome() {
    return (
        <section className="bg-amber-400 py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">Cada projeto é único!</h2>

                        <p>100% personalizado para você.</p>

                        <p>Serviços de qualidade e responsabilidade é aqui!</p>

                        <a href="#" className="bg-[#04204C] text-[#E3D5C2] flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                            Faça um orçamento
                            <CursorClickIcon className="w-6 h-6 text-[#E3D5C2]"/>
                        </a>
                    </div>

                    <div className="relative">
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                        
                        <Image
                            src={mSmartImg}
                            alt="Foto de uma mulher segurando um smartphone."
                            fill
                            quality={100}
                            className="object-cover"
                            priority
                        />

                    </div>
                    <p>teste teste teste teste teste</p>

                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                        
                        <Image
                            src={hSmartImg}
                            alt="Foto de um homem segurando um smartphone."
                            fill
                            quality={100}
                            className="object-cover"
                            priority
                        />
                    </div>
                    <p>teste teste teste teste teste</p>

                </div>

                </div>

            </div>
        </section>
    );
}