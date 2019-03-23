import React from 'react'
import {withRouter} from 'next/router'

import Header from '../components/Header'

const timeline = withRouter(props => {
  const name = props.router.query.name

  return (
    <>
      <Header />
      <h2>{name}</h2>
    </>
  )
})

export default timeline