import axios from "axios";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Same Project",
    description:
      "Loren ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc sed velit dignissim lacinia. Nullam in urna quis libero molestie faucibus.",
  },
  {
    id: 2,
    name: "Same Project",
    description:
      "Loren ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc sed velit dignissim lacinia. Nullam in urna quis libero molestie faucibus.",
  },
  {
    id: 3,
    name: "Same Project",
    description:
      "Loren ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc sed velit dignissim lacinia. Nullam in urna quis libero molestie faucibus.",
  },
  {
    id: 4,
    name: "Same Project",
    description:
      "Loren ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc sed velit dignissim lacinia. Nullam in urna quis libero molestie faucibus.",
  },
  {
    id: 5,
    name: "Same Project",
    description:
      "Loren ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nunc sed velit dignissim lacinia. Nullam in urna quis libero molestie faucibus.",
  },
];

export default async function Home() {
  return (
    <main className="w-full max-w-6xl m-auto">
      <section className="flex  items-center gap-8 my-10">
        <Image
          src="/images/profile.jpg"
          alt="Adilson Oliveira"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex flex-col  justify-center">
          <h1 className="text-4xl font-bold">Adilson Oliveira</h1>
          <h2 className="text-2xl text-gray-500">Software Engineer</h2>

          <h4 className="text-md text-sky-300">Tech Lead at @PeerBR</h4>

          <p className="text-xs text-gray-500">
            Sou desenvolvedor de software com mais de 3 anos de experiência em
            desenvolvimento de software. Tenho conhecimento em todo fluxo de
            gestão e desenvolvimento de software, habilidades com Nodejs,
            NestJS, SQL, ferramentais AWS, GIT, observabilidade, Kafka, criação
            de fluxo CI/CD, e com foco em front-end sendo elas ReactJS, NextJS,
            TailwindCSS, Jest. Também possuo experiência como Tech Lead
            liderando equipes de desenvolvedores.
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center my-12">
        <div className="flex flex-col items-center justify-center">
          <div className="w-80 h-[2px] bg-sky-200 rounded-full"></div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-2xl text-gray-500">Software Engineer</p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full h-40 border flex flex-col p-8 justify-center"
            >
              <h1 className="text-2xl font-bold">{project.name}</h1>
              <p className="text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-80 h-[2px] bg-sky-200 rounded-full"></div>
        </div>
      </section>
    </main>
  );
}
