
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-indigo-900 text-white flex items-center justify-between p-6">
      <h1>My Website</h1>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <Link href="/login">
          <button className="btn btn-soft btn-primary">Login</button>
      </Link>
    </div>
  )
}

export default Header

