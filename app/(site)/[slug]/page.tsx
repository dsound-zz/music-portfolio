"use client"
import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params?.slug)

  return (
    <div className='max-w-2xl mx-auto py-5'>
      <div className='text-4xl text-gray-500 mt-10 leading-loose tracking-wide'>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}
