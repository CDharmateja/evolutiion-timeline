import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <Link href="/">
        <h1>
          Evolution
        </h1>
      </Link>
      <style jsx>{`
        h1 {
          margin: 0;
          padding: 20px;
        }
        
        Link {
          text-decoration: none;
        }
      `}</style>
    </header>
  )
}

export default Header
