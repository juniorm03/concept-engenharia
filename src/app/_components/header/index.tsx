import Link from "next/link";
import logoConcept from "../../../../public/images/logo-concept.jpg"
import Image from "next/image";

export function Header(){
    return (
        <header className="flex px-2 py-4 bg-[#04204C] text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div className=" flex items-center gap-2">
                    <Image
                        src={logoConcept}
                        alt="Logo Concept Arquitetura"
                        className="w-15 h-15"
                    />
                    Concept <br /> Arquitetura e Engenharia
                </div>

                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/projetos">
                                Projetos
                            </Link>
                        </li>

                        <li>
                            <Link href="/orcamento">
                                Faça um orçamento
                            </Link>
                        </li>

                        <li>
                            <Link href="/sobre">
                                Sobre nós
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}