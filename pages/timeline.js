import React from 'react'
import {withRouter} from 'next/router'
// import dynamic from 'next/dynamic'

import Layout from '../components/Layout'
import treeJson from '../data/tree.json'

// const DBHelper = dynamic(import('../dbhelper'), {
//   ssr: false
// })

// (async ()=> {
//   console.log(await DBHelper)
// })()

// console.log(DBHelper)

const Timeline = withRouter(props => {
  const name = props.router.query.name
  const sliderValue = props.router.query.sliderValue.split(',')

  const details = getEvolutionDetails(name)

  let list = filterByTime(details, sliderValue)

  list = list.map(species => <li key={species.name}>{species.name}</li>)

  return (
    <Layout>
      <h2>{name}</h2>
      {/* <p>Slider value is {sliderValue}</p> */}
      <ul>
        {list}
      </ul>
    </Layout>
  )
})

// function getPercentages()

function filterByTime(json, [minTime, maxTime]) {
  return json.filter(species => {
    const age = species['age_mya']
    return age > minTime && age < maxTime
  })
}

function getEvolutionDetails(species) {
  const json = treeJson['phyloxml']['phylogeny']['clade']
  
  const result = searchTree(json[0], species)
  result.push(json[0])

  const filteredResult = result.filter(clade => clade.name !== 'unnamed node')
  
  return filteredResult
}

function searchTree(element, matchingName){
  if(element.name == matchingName){
    return []
  }else if (element.clade != null){
    var i
    var result = null
    let count = 0
    for(i=0; result == null && i < element.clade.length; i++){
      count += 1 
      result = searchTree(element.clade[i], matchingName)
    }
    if (result !== null) {
      result.push(element.clade[count-1])
    }
    return result
  }
  return null
}

export default Timeline