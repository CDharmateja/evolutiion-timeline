import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Evolution Timeline</a>
        </Link>
      </h1>
      <style jsx>{`
        h1 {
          margin: 0;
          padding: 20px;
          text-align: center;
          background-color: green;
        }
        
        Link {
          text-decoration: none;
        }

        a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </header>
  )
}

export default Header
