import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()
  return (
    <div className='max-w-5xl mx-auto py-20'>
      <h1 className='text-7xl font-extrbold'>
        Hello I&apos;m{" "}
        <span className='bg-gradient-to-r from-sky-300 via-blue-600 to-red-700 bg-clip-text text-transparent'>
          {" "}
          Demian
        </span>
        !
      </h1>
      <p className='mt-3 text-xl text-gray-600'>
        Hello everyone! Check out my music!
      </p>
      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>
      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(({ _id, name, image, slug }) => (
          <Link
            key={_id}
            href={`/project/${slug}`}
            className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
          >
            {image && (
              <Image
                src={image}
                alt={name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='mt-2 font-extrabold bg-gradient-to-r  from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              {name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
