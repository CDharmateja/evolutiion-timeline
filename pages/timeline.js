import React from 'react'
import {withRouter} from 'next/router'
import dynamic from 'next/dynamic'

import Layout from '../components/Layout'

const DBHelper = dynamic(import('../dbhelper'), {
  ssr: false
})
// import DBHelper from '../dbhelper'

DBHelper

const timeline = withRouter(props => {
  const name = props.router.query.name
  const sliderValue = props.router.query.sliderValue

  return (
    <Layout>
      <h2>{name}</h2>
      <p>Slider value is {sliderValue}</p>
    </Layout>
  )
})

export default timeline