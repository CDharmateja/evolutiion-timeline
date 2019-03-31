import React from 'react'
import {withRouter} from 'next/router'

import Layout from '../components/Layout'

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