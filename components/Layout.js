import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from './Header'
import rcStyle from 'rc-slider/assets/index.css'

const Layout = props => (
  <div className='layout-container'>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="See interactive timeline of different species" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Evolution Timeline</title>
      <style>
        {rcStyle}
      </style>
      {/* <script src="/static/registerSw.js"></script>
      <script src="/static/sw.js"></script> */}
    </Head>

    <Header/>
    <main>
      {props.children}
    </main>

    <style jsx global>{`
      body {
        margin: 0;
        font-size: 18px;
      }
      main {
        padding: 20px;
      }
    `}</style>
  </div>
)

// TODO:
Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout