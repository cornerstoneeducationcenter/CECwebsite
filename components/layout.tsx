import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <header className="bg-trueblue text-white">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Cornerstone Education Centre Logo"
              width={240}
              height={240}
              priority
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg">CORNERSTONE</span>
              <span className="text-brickred">EDUCATION CENTRE</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/academics" className="hover:text-white">Academics</Link>
            <Link href="/admissions" className="hover:text-white">Admissions</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="mt-auto bg-trueblue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p>P.O.BOX 162</p>
              <p>CHEPTAIS</p>
              <p>Bungoma County</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
                <li><Link href="/academics" className="hover:text-white">Academics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Our Motto</h3>
              <p className="italic">"Let your Light Shine!"</p>
              <p className="mt-4 text-sm">Founded on Christian Principles</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Cornerstone Education Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
