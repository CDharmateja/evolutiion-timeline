import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from './Header'
import rcStyle from 'rc-slider/assets/index.css'

const Layout = props => (
  <div className='layout-container'>
    <Head>
      <style>
        {rcStyle}
      </style>
    </Head>

    <Header/>
    <main>
      {props.children}
    </main>

    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout