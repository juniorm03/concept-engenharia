import { ProjectWork } from "./components/project-work";
import { ProjectGallery } from "./components/project-gallery";

export default function Projetos() {
  return (
    <div className=" bg-[#E3D5C2] min-h-screen">
      <ProjectGallery />
      <ProjectWork />
    </div>
  );
}
