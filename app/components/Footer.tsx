
"use client"
const Footer = () => {
  console.log("footer components ")
  return (
    <div className="bg-gray-600 text-white font-bold text-2xl text-center">
     <h2>&copy; {new Date().getFullYear()}| Next js 16</h2>
    </div>
  )
}

export default Footer
