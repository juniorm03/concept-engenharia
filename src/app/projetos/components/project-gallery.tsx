"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: {
    processo: string[];
    materiais: string[];
    duracao: string;
    area: string;
    cliente: string;
  };
}

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum Moderna",
    category: "Reforma",
    image: "/images/casa1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      processo: [
        "Lorem ipsum dolor sit amet 1",
        "Consectetur adipiscing elit 2",
        "Sed do eiusmod tempor 3",
        "Incididunt ut labore 4",
        "Et dolore magna aliqua 5",
        "Ut enim ad minim veniam 6",
        "Quis nostrud exercitation 7",
        "Ullamco laboris nisi 8",
      ],
      materiais: [
        "Lorem ipsum",
        "Dolor sit",
        "Amet consectetur",
        "Adipiscing elit",
      ],
      duracao: "6 meses",
      area: "250m²",
      cliente: "Lorem Ipsum",
    },
  },
  {
    id: 2,
    title: "Lorem Ipsum Commercial",
    category: "Reforma",
    image: "/images/casa2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      processo: [
        "Lorem ipsum dolor sit 1",
        "Amet consectetur adipiscing 2",
        "Elit sed do eiusmod 3",
        "Tempor incididunt ut 4",
        "Labore et dolore magna 5",
        "Aliqua ut enim ad 6",
        "Minim veniam quis 7",
        "Nostrud exercitation ullamco 8",
      ],
      materiais: ["Lorem ipsum", "Dolor", "Amet", "Granito"],
      duracao: "18 meses",
      area: "12.000m²",
      cliente: "Lorem Ipsum Corp",
    },
  },
  {
    id: 3,
    title: "Lorem Ipsum Reforma",
    category: "Commercial",
    image: "/images/casa3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      processo: [
        "Lorem ipsum dolor 1",
        "Sit amet consectetur 2",
        "Adipiscing elit sed 3",
        "Do eiusmod tempor 4",
        "Incididunt ut labore 5",
        "Et dolore magna 6",
        "Aliqua ut enim 7",
        "Ad minim veniam 8",
      ],
      materiais: ["Lorem", "Ipsum", "Dolor", "Amet"],
      duracao: "3 meses",
      area: "180m²",
      cliente: "Lorem Ipsum Duo",
    },
  },
  {
    id: 4,
    title: "Lorem Ipsum Sustentável",
    category: "Commercial",
    image: "/images/casa4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      processo: [
        "Lorem ipsum amet 1",
        "Consectetur adipiscing 2",
        "Eiusmod tempor 3",
        "Incididunt ut labore 4",
        "Et dolore magna 5",
        "Aliqua ut minim 6",
        "Quis nostrud 7",
        "Exercitation ullamco 8",
      ],
      materiais: ["Lorem", "Ipsum", "Dolor", "Amet"],
      duracao: "8 meses",
      area: "300m²",
      cliente: "Lorem Instituto",
    },
  },
  {
    id: 5,
    title: "Lorem Ipsum Interiores",
    category: "Residencial",
    image: "/images/casa5.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      processo: [
        "Lorem ipsum 1",
        "Dolor sit 2",
        "Amet consectetur 3",
        "Adipiscing elit 4",
        "Sed do eiusmod 5",
        "Tempor incididunt 6",
        "Ut labore 7",
        "Et dolore magna 8",
      ],
      materiais: ["Lorem", "Mármore", "LED", "Tecidos"],
      duracao: "2 meses",
      area: "150m²",
      cliente: "Lorem Designer",
    },
  },
  {
    id: 6,
    title: "Lorem Ipsum Industrial",
    category: "Residencial",
    image: "/images/casa6.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: {
      processo: [
        "Lorem ipsum dolor 1",
        "Sit amet consectetur 2",
        "Adipiscing elit sed 3",
        "Do eiusmod tempor 4",
        "Incididunt ut labore 5",
        "Et dolore magna 6",
        "Aliqua ut enim 7",
        "Minim veniam quis 8",
      ],
      materiais: ["Lorem", "Ipsum", "Dolor", "Ventilação"],
      duracao: "12 meses",
      area: "5.000m²",
      cliente: "Lorem Industrial",
    },
  },
];

export function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);





  const categories = [
    "Todos",
    "Residencial",
    "Commercial",
    "Reforma",
    "Sustentável",
    "Interiores",
    "Industrial",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-[#E3D5C2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#04204C] mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-xl text-[#04204C] text-opacity-90 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados com excelência e
            qualidade
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#04204C] text-[#E3D5C2] shadow-lg"
                  : "bg-white text-[#04204C] hover:bg-[#04204C] hover:text-[#E3D5C2]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#04204C] text-[#E3D5C2] px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-[#E3D5C2] text-[#04204C] px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#04204C] hover:text-[#E3D5C2] border-none border-[#04204C]"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#04204C] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#04204C] text-opacity-80 leading-relaxed">
                  {project.description}
                </p>
                <button
                  onClick={() => openModal(project)}
                  className="mt-4 text-[#04204C] font-semibold hover:text-opacity-70 transition-colors duration-300 flex items-center gap-2"
                >
                  Saiba mais
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalhes do Projeto */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-opacity-40 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
              {/* Header do Modal com Imagem */}
              <div className="relative h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-[#04204C]  text-[#E3D5C2] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E3D5C2] hover:text-[#04204C] transition-all duration-300 shadow-lg"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#04204C] text-[#E3D5C2] px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/*Conteudo*/}

              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#04204C] mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-[#04204C] text-opacity-80 text-lg mb-8">
                  {selectedProject.description}
                </p>

                {/* Informações do Projeto */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <div className="text-2xl text-[#04204C] mb-1">⏱️</div>
                    <div className="font-semibold text-[#04204C]">Duração</div>
                    <div className="text-[#04204C] text-opacity-80">
                      {selectedProject.details.duracao}
                    </div>
                  </div>
                  <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <div className="text-2xl text-[#04204C] mb-1">📐</div>
                    <div className="font-semibold text-[#04204C]">Área</div>
                    <div className="text-[#04204C] text-opacity-80">
                      {selectedProject.details.area}
                    </div>
                  </div>

                  <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <div className="text-2xl text-[#04204C] mb-1">👤</div>
                    <div className="font-semibold text-[#04204C]">Cliente</div>
                    <div className="text-[#04204C] text-opacity-80">
                      {selectedProject.details.cliente}
                    </div>
                  </div>

                  <div className="bg-gray-300 p-4 rounded-lg text-center">
                    <div className="text-2xl text-[#04204C] mb-1">🏆</div>
                    <div className="font-semibold text-[#04204C]">
                      Categoria
                    </div>
                    <div className="text-[#04204C] text-opacity-80">
                      {selectedProject.category}
                    </div>
                  </div>
                </div>

                {/* mostra o processo de execução*/}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#04204C] mb-4 border-b-2 border-[#04204C] pb-2">
                    📋 Processo de Execução
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.details.processo.map((etapa, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-gray-300 p-4 rounded-lg"
                      >
                        <span className="bg-[#04204C] text-[#E3D5C2] rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1 shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-[#04204C] text-opacity-80 font-semibold">
                          {etapa}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materiais Utilizados */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#04204C] mb-4 border-b-2 border-[#04204C] pb-2">
                    🛠️ Materiais Principais
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.materiais.map(
                      (material, index) => (
                        <span
                          key={index}
                          className="bg-[#E3D5C2] text-[#04204C] px-3 py-2 rounded-full text-sm font-semibold"
                        >
                          {material}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Botão Fechar */}
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-[#04204C] text-[#E3D5C2] px-6 py-3 rounded-full font-semibold hover:bg-[#E3D5C2] hover:text-[#04204C] transition-all duration-300"
                  >
                    Fechar Detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mensagem se não houver projetos na categoria */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#04204C] text-opacity-70 text-lg">
              Nenhum projeto encontrado na categoria {selectedCategory}.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
