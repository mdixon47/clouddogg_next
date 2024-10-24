import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
     <footer className="bg-muted text-muted-foreground mt-8">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <p>&copy; 2024 CloudDogg. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer