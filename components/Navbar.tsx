import { Cloud } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Cloud size={32} />
        <span className="text-2xl font-bold">CloudDogg</span>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/about" className="hover:underline">About Us</Link></li>
          <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;