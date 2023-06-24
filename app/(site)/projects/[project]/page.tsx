import { getProject } from "@/sanity/sanity-utils"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project
  const project = await getProject(slug)

  return (
    <div className='max-w-3xl mx-auto py-20'>
      <header className='flex items-center justify-between'>
        <h1 className='bg-gradient-to-r from-sky-300 via-blue-600 to-red-700 bg-clip-text text-transparent text-7xl font-extrabold'>
          {project?.name}
        </h1>
        <a
          href={project?.url}
          title='view project'
          target='_blank'
          className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'
        >
          View Project
        </a>
      </header>
    </div>
  )
}
