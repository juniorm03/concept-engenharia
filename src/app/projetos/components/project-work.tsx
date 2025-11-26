// src/app/projetos/components/ProjectWorkflow.tsx
export function ProjectWork() {
    const steps = [
        {
            number: "01",
            title: "Consultoria Inicial",
            description: "Analisamos seu terreno, necessidades e orçamento para entender o projeto dos sonhos.",
            icon: "📐"
        },
        {
            number: "02", 
            image: "/images/casa1.jpg",
            title: "Projeto Arquitetônico",
            description: "Criamos plantas, renders 3D e toda documentação técnica do seu futuro imóvel.",
            icon: "🏗️"
        },
        {
            number: "03",
            title: "Aprovações e Licenças",
            description: "Cuidamos de toda a burocracia junto aos órgãos municipais e concessionárias.",
            icon: "📋"
        },
        {
            number: "04",
            title: "Execução da Obra",
            description: "Mão na massa! Construímos com qualidade, segurança e dentro do prazo.",
            icon: "🔨"
        },
        {
            number: "05", 
            title: "Acabamentos",
            description: "Aplicamos os revestimentos, instalações e todos os detalhes finais.",
            icon: "🎨"
        },
        {
            number: "06",
            title: "Entrega das Chaves", 
            description: "Seu sonho realizado! Fazemos a entrega oficial com toda documentação.",
            icon: "🔑"
        }
    ];

    return (
        <section className="py-20 bg-[#E3D5C2]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#04204C] mb-4">
                        Como Trabalhamos
                    </h2>
                    <p className="text-xl text-[#04204C] opacity-90 max-w-2xl mx-auto">
                        Do projeto à entrega: nosso processo garantindo qualidade e satisfação
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-4xl">{step.icon}</span>
                                <span className="text-6xl font-bold text-[#04204C] opacity-0">
                                    {step.number}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-[#04204C] mb-4">
                                {step.title}
                            </h3>
                            
                            <p className="text-[#04204C] text-opacity-80 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}