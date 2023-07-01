import { getPages } from "@/sanity/sanity-utils"
import "../globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          className='flex items-start justify-between bg-slate-300 p-10
        '
        >
          <div>
            <Link
              href='/'
              className='text-7xl font-extrbold  text-gray-600 font-poppins font-thin'
            >
              Demian
              <span className='bg-gradient-to-r from-sky-300 via-blue-600 to-red-700 bg-clip-text flex-1 text-transparent'>
                {" "}
                Sims
              </span>
            </Link>
            <p className='mt-5 text-2xl text-gray-600 tracking-widest bg-gradient-to-r from-sky-300 via-blue-600 to-red-700 bg-clip-text text-transparent'>
              <span>Composer. Producer. Guitarist.</span>
            </p>
          </div>
          <div className='flex items-center gap-5 text-sm text-gray-600 pr-9'>
            {pages.map(({ _id, slug, title }) => (
              <Link
                key={_id}
                href={`/${slug}`}
                className='grow shrink-0 basis-2/4 bg-sky-300 rounded-lg ml-5 p-3 whitespace-nowrap hover:bg-blue-400 hover:text-pink-100 transition'
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
