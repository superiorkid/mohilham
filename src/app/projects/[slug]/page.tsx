import Image from "next/image";
import Link from "next/link";
import { MdKeyboardBackspace, MdCalendarMonth } from "react-icons/md";

interface Props {
  params: { slug: string };
}

function ProjectDetailPage({ params: { slug } }: Props) {
  return (
    <main className="mt-8 max-w-screen-md mx-auto px-3 md:px-0">
      <div className="mt-6 mb-12">
        <Link href="/projects" className="text-gray-600 hover:underline">
          <MdKeyboardBackspace className="h-4 w-4 inline-flex mr-2" />
          back to projects
        </Link>
      </div>

      <article className="prose-lg dark:prose-invert prose-h1:font-bold prose-h1:text-4xl">
        <h1 className="font-bold text-4xl mb-5">Nextagram</h1>

        <div className="flex items-center justify-between text-sm">
          <time className="text-gray-600">
            <MdCalendarMonth className="inline-flex w-4 h-4 mr-2" />
            22 june 2000
          </time>
          <p className="hidden md:block">
            <span className="text-gray-500"> Tags:</span>
            {"  "}Nextjs, TailwindCSS, Prisma, PostgreSQL
          </p>
        </div>

        {/* heading image */}
        <div className="relative h-[35dvh]">
          <Image
            fill
            quality={75}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="detail headings"
            className="object-cover rounded-md brightness-75"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="mt-20 md:mt-24">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            delectus saepe aliquid ab officia voluptas enim veritatis illo
            deserunt exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dolor alias sequi illo pariatur fugit sunt, voluptates aliquam ea
            consectetur? Mollitia cupiditate inventore atque ea ut reprehenderit
            quia itaque maxime tenetur cumque libero voluptatibus asperiores,
            nam similique modi fuga perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ad rerum minus nobis illo excepturi necessitatibus eos atque
            assumenda explicabo dignissimos, ipsam odit id, voluptate voluptas?
            Debitis ipsa est quo amet!
          </p>
        </div>
      </article>
    </main>
  );
}

export default ProjectDetailPage;
