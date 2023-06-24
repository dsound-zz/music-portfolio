import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()
  return (
    <div className='max-w-5xl mx-auto py-10'>
      <div className='mt-5 grid md:grid-cols-1 lg:grid-cols-1 gap-8'>
        {projects.map(({ _id, name, image, slug }) => (
          <div key={_id} className='flex-col'>
            <h2 className='mt-24 font-bold text-gray-700 text-3xl'>{name}</h2>
            <Link
              href={`/projects/${slug}`}
              className='p-4 hover:scale-105 hover:border-blue-500 transition'
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
