import Image from "next/image"
import Link from "next/link"
import logoConcept from "../../../../public/images/logo-concept.jpg"


export default function Footer() {
    return(
        <section className="bg-[#04204C] py-16">
            <div className="py-20 border border-red-500 container mx-auto px-4">
                <div className="py-20 border border-green-500 text-white flex justify-around">
                    
                    <Image
                        src={logoConcept}
                        alt="Logo da construtora Concept"
                        className="w-40 h-40"
                    />

                    
                    <ul className="border border-amber-400">Menu
                        <li>
                            <Link href="/projetos">
                                Projetos
                            </Link>
                        </li>
                    </ul>

                    <ul className="border border-amber-400">Onde estamos localizados
                        <li>Avenida tal tal, nº 2000</li>
                    </ul>

                    <ul className="border border-amber-400">Contatos
                        <li>email@email.com</li>
                        <li>(00) 0000-0000</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}