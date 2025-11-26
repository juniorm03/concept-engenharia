import NossasCaracteristicas from "./_components/caracteristicas";
import Depoimentos from "./_components/depoimentos";
import Footer from "./_components/footer";
import { Hero } from "./_components/hero";
import ProjetosHome from "./_components/projetos-home";

export default function Home() {
  return(
    <div>
      <Hero />
      <ProjetosHome />
      <NossasCaracteristicas />
      <Depoimentos />
    </div>
  )
}