import Link from "next/link"
import "../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
//these variables are going to appear in all the pages
//insert it into the body
  //header variable
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
        <h1 className="text-2xl text-white font-bold mt-4">JSP</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p><br />
      </div>
    </header>
  )

  //footer variabel
  const footer = (
    <header>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h2>Develop by Jespon</h2>
      </div>
    </header>
  )
//for me to know the type of variable
  //console.log(typeof(header))
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
