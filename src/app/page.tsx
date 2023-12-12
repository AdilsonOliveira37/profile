import Image from "next/image";

export default function Home() {
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

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-80 h-[2px] bg-sky-200 rounded-full"></div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-2xl text-gray-500">Software Engineer</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-80 h-[2px] bg-sky-200 rounded-full"></div>
        </div>
      </section>
    </main>
  );
}
