import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import Search from '../components/Search'

function Index() {
  return (
    <Layout>
      <Search />
      <div>
        <strong>Or</strong>
        <div>Learn about <Link href="!#"><a href="">evolution</a></Link></div>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
        strong, a {
          margin: 0 5px;
        }
      `}</style>
    </Layout>
  )
}

export default Index
