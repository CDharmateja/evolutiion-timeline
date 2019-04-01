import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Header from './Header'
import rcStyle from 'rc-slider/assets/index.css'

const Layout = props => (
  <div className='layout-container'>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="See interactive timeline of different species" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#00ff00" />
      <title>Evolution Timeline</title>
      <link rel="shortcut icon" href="/static/favicon.ico"></link>
      <link rel="manifest" href="/static/manifest.json"/>
      <style>
        {rcStyle.replace(/[ \n]/g,'')}
      </style>
    </Head>

    <Header/>
    <main>
      {props.children}
    </main>

    <style jsx global>{`
      body {
        margin: 0;
        font-size: 18px;
        background-color: #EDEDEB;
      }
      main {
        padding: 20px;
      }
      ul li {
        padding-left: 15px;
        margin: 10px;
        background-color: white !important;
      }
    `}</style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout