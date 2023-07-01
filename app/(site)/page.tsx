import { getProjects, getTracks } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()
  const tracks = await getTracks()

  return (
    <div className='max-w-5xl mx-auto py-5'>
      <div className='flex flex-col justify-start mt-5 px-5 md:px-4'>
        {projects.map(({ _id, name, image, url }) => (
          <div key={_id} className='relative pb-5'>
            <h2 className='mt-2  text-gray-700 text-xl md:text-3xl'>{name}</h2>
            <Link
              href={url}
              className='p-5 hover:scale-105 hover:border-blue-500'
            >
              {image && (
                <Image
                  src={image}
                  alt={name}
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto'
                  style={{ height: "400px" }}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className='mt-4 grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center'>
        {tracks.map(({ _id, name, image, url }) => (
          <div key={_id} className='relative h-full px-2 w-full'>
            <h2 className='text-zinc-600 text-lg md:text-base'>{name}</h2>
            <Link
              href={url}
              className='p-5 hover:scale-105 hover:border-blue-500'
            >
              {image && (
                <Image
                  src={image}
                  alt={name}
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto'
                  style={{ height: "300px" }}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
