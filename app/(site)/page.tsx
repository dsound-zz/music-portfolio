import { getProjects, getTracks } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()
  const tracks = await getTracks()
  console.log(projects, tracks)
  return (
    <div className='max-w-5xl mx-auto py-5'>
      <div className='flex flex-col items-center mt-5'>
        {projects.map(({ _id, name, image, url }) => (
          <div key={_id} className='relative mt-10'>
            <h2 className='mt-2  text-gray-700 text-3xl'>{name}</h2>
            <Link
              href={url}
              className='p-5 hover:scale-105 hover:border-blue-500'
            >
              {image && (
                <Image
                  layout='responsive'
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
      <div className='mt-10 grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center'>
        {tracks.map(({ _id, name, image, url }) => (
          <div key={_id} className='relative h-full'>
            <h2 className='text-zinc-600 text-base'>{name}</h2>
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
