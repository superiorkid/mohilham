import Tags from "@/components/Tags";
import Image from "next/image";
import Link from "next/link";
import { MdCalendarMonth, MdKeyboardBackspace } from "react-icons/md";
import { getProject } from "../../../../actions/project.action";
import PhotoViewer from "../components/PhotoViewer";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Props) {
  const project = await getProject(id);

  return {
    title: `${project?.name}`,
  };
}

async function ProjectDetailPage({ params: { id } }: Props) {
  const project = await getProject(id);

  return (
    <main className="mt-8 max-w-screen-md mx-auto px-3 md:px-0 mb-10">
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
            {project?.createdAt?.toDateString()}
          </time>
          <Tags project={project} />
        </div>

        {/* heading image */}
        <div className="relative h-[45dvh]">
          <Image
            fill
            loading="eager"
            src={project?.thumbnail as string}
            alt="detail headings"
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="mt-20 md:mt-24">
          {/* <Markdown remarkPlugins={[remarkGfm]}>{project?.body}</Markdown> */}
          <div dangerouslySetInnerHTML={{ __html: project?.body as string }} />
        </div>

        <div>
          <h3>Screenshoots</h3>
          <PhotoViewer screenshoots={project?.screenShoot!} />
        </div>
      </article>
    </main>
  );
}

export default ProjectDetailPage;
