import { getPages } from "@/sanity/sanity-utils"
import "../globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Page } from "@/types/Page"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Demian Sims Music",
  description: "A portfolio of music by Demian Sims",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // get all of our pages
  const pages = await getPages()

  return (
    <html lang='en'>
      <body className='max-w-screen-4xl'>
        <header
          className='flex flex-col md:flex-row items-center md:justify-between bg-slate-300 p-10
        '
        >
          <div className='flex flex-col items-center md:items-start'>
            <Link
              href='/'
              className='text-5xl md:text-7xl font-extrbold  text-gray-600 font-poppins font-thin'
            >
              Demian
              <span className='bg-gradient-to-r from-sky-500 via-blue-600 to-red-700 bg-clip-text flex-1 text-transparent'>
                {" "}
                Sims
              </span>
            </Link>
            <p className='mt-5 text-xl md:text-2xl text-gray-600 tracking-widest bg-gradient-to-r from-sky-500 via-blue-600 to-red-700 bg-clip-text text-transparent'>
              <span>Composer. Producer. Guitarist.</span>
            </p>
          </div>
          <div className='flex items-center gap-5 text-sm text-gray-600 pt-8 md:pt-0 pr-9'>
            {pages.map(({ _id, slug, title }: Page) => (
              <Link
                key={_id}
                href={`/${slug}`}
                className='grow shrink-0 basis-1/4 bg-sky-300 rounded-lg ml-5 p-3 whitespace-nowrap hover:bg-blue-400 hover:text-pink-100 transition'
              >
                <p className='text-center text-gray-600'>{title}</p>
              </Link>
            ))}
          </div>
        </header>
        <main className='py-5'>{children}</main>
      </body>
    </html>
  )
}
