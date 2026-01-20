"use "


import Link from "next/link"

const Footer = () => {
  console.log("footer components ")
  return (
    <div className="bg-gray-600 text-white font-bold text-xl text-center p-4 flex justify-between items-center">
     <h2>&copy; {new Date().getFullYear()}| Next js 16</h2>
    <Link href="/">
     <button className="btn btn-primary">↩️</button>
    </Link>
    </div>
  )
}

export default Footer
