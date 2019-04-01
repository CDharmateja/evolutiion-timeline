import React from 'react'
import {withRouter} from 'next/router'

import Layout from '../components/Layout'
import treeJson from '../data/tree.json'

const Timeline = withRouter(props => {
  const name = props.router.query.name
  const sliderValue = props.router.query.sliderValue.split(',')

  const details = getEvolutionDetails(name)

  let list = filterByTime(details, sliderValue)

  const speciesDetails = list[0]

  let jsx = ''
  if (parseInt(speciesDetails['age_mya']) == 0) {
    jsx = <div>{`${speciesDetails['name']} can be seen in the real world.`}</div>
  } else {
    jsx = <div>{`${speciesDetails['name']} was there ${speciesDetails['age_mya']} million years ago`}</div>
  }
  list = list.slice(1,)

  let previousFormJsx = ''
  if (list !== []) {
    previousFormJsx = <strong>{`Here are the ${name}'s previous forms`}</strong>
  }

  list = list.map(species => 
    <li key={species.name}>
      <h3>{species.name}</h3>
      {getImageJsx(species.name)}
      <p>{`Age: ${species['age_mya']}`}</p>
    </li>)

  const imageJsx = getImageJsx(name)

  return (
    <Layout>
      <h2>{`Evolution of ${name}`}</h2>
      <div className="image">
        {imageJsx}
      </div>
      <div className="details">
        {jsx}
      </div>
      <div className="previous-form">{previousFormJsx}</div>
      <ul>
        {list}
      </ul>
      <style jsx>{`
        .previous-form {
          margin-top: 20px;
        }
        ul {
          display: flex;
          flex-direction: column;
          list-style: none;
        }
        .image, .details, .previous-form {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  )
})

function filterByTime(json, [minTime, maxTime]) {
  return json.filter(species => {
    const age = species['age_mya']
    return age > minTime && age < maxTime
  })
}

function getImageOfSpecies(name) {
  const images = ['Chimpanzee_icon', 'Wasp_icon', 'Kangaroo_icon', 'Platypus_icon', 'Pikaia_image_2', 'Pikaia_image_1', 'Peacock butterfly_icon', 'Rabbit_icon', 'Opabinia_image_2', 'Brouffia_icon', 'Ichthyornis_image_2', 'Fruit fly_icon', 'Sturgeon_icon', 'Chimpanzee_image_3', 'Penguin_icon', 'Tyrannosaurus Rex_image_1', 'Tyrannosaurus Rex_icon', 'Sponge_image_3', 'Magnolia_icon', 'Panderichthys_image_2', 'Polar bear_image_3', 'Duck_icon', 'Pikaia_image_3', 'Lion_icon', 'Dog_icon', 'Paddle fish_icon', 'Giant dragonfly_image_1', 'Hamster_icon', 'Australopithecus afarensis_icon', 'Giant dragonfly_image_3', 'Lamprey_image_4', 'Snake_image_2', 'Spider_icon', 'Brine shrimp_icon', 'Polar bear_image_2', 'Archaeopteryx_image_1', 'Hedgehog_icon', 'Polar bear_image_1', 'Diplodocus_image_2', 'Opabinia_icon', 'Carrot_icon', 'Sheep_icon', 'Shark_icon', 'Ostrich_icon', 'Ichthyornis_image_4', 'Velvet worm_image_3', 'Velvet worm_icon', 'Velvet worm_image_4', 'Brouffia_image_2', 'Giant dragonfly_image_4', 'Acoel_image_1', 'Ichthyornis_icon', 'Brouffia_image_1', 'Tyrannosaurus Rex_image_3', 'Eusthenopteron_icon', 'Newt_icon', 'Opabinia_image_3', 'Life on Earth_icon', 'Opabinia_image_1', 'Diplodocus_icon', 'Archaeopteryx_image_3', 'Dimetrodon_icon', 'Hippopotamus_icon', 'Clown fish_icon', 'Rat_icon', 'Panderichthys_image_4', 'Cephalaspidida_icon', 'Moss_icon', 'E. coli_icon', 'Sea Scorpion_icon', 'Cat_icon', 'Brouffia_image_4', 'Camel_icon', 'Snake_icon', 'Pig_icon', 'Archaeopteryx_image_5', 'Giant dragonfly_image_2', 'Polar bear_icon', 'Orchid_icon', 'Brown bear_icon', 'Ichthyornis_image_3', 'Acoel_image_2', 'Lamprey_image_2', 'Diplodocus_image_1', 'Lamprey_image_3', 'Giant dragonfly_icon', 'Archaeopteryx_icon', 'Pikaia_icon', 'Harvestman_icon', 'Diplodocus_image_3', 'Seymouriamorpha_icon', 'Tortoise_image', 'Eubacteria_icon', 'Cockroach_icon', 'Tortoise_icon', 'Shrew_icon', 'Sponge_image_1', 'Lamprey_image_1', 'E. coli_image_2', 'Mole_icon', 'Opabinia_image_4', 'darwin_icon', 'Sunflower_icon', 'Millipede_icon', 'Seal_icon', 'Archaeopteryx_image_4', 'Lamprey_icon', 'Brouffia_image_3', 'Tyrannosaurus Rex_image_4', 'Aardvark_icon', 'E. coli_image_1', 'Panderichthys_image_1', 'Acoel_icon', 'Dimetrodon_image_1', 'Tyrannosaurus Rex_image_2', 'Horse_icon', 'Dimetrodon_image_2', 'Scots pine_icon', 'Ichthyornis_image_1', 'Velvet worm_image_1', 'Snake_image_3', 'Flamingo_icon', 'Fruit bat_icon', 'Sponge_icon', 'Antelope_icon', 'Tree shrew_icon', 'Oat_icon', 'Panderichthys_icon', 'Chimpanzee_image_1', 'Chimpanzee_image_2', 'Snake_image_1', 'Archaeopteryx_image_2', 'Cow_icon', 'Rhino_icon', 'Toucan_icon', 'Velvet worm_image_2', 'Panderichthys_image_3', 'Humpback whale_icon', 'Diplodocus_image_4', 'Dimetrodon_image_3', 'Sponge_image_2', 'Chimpanzee_image_4', 'Pteraspis_icon', 'Tyrannosaurus Rex_image_5', 'Homo erectus_icon']
  
  for (const image of images) {
    if (image.includes(name)) {
      return `${image}.jpg`
    }
  }

  return false
}

function getImageJsx(name) {
  const image = getImageOfSpecies(name)
  let imageJsx = ''
  if (image) {
    // eslint-disable-next-line
    const imageSrc = require(`../images/${image}`)
    imageJsx = <img src={imageSrc} />
  }
  return imageJsx
}

function getEvolutionDetails(species) {
  const json = treeJson['phyloxml']['phylogeny']['clade']
  
  const result = searchTree(json[0], species)
  result.push(json[0])

  const filteredResult = result.filter(clade => clade.name !== 'unnamed node')
  
  return filteredResult
}

function searchTree(element, matchingName) {
  if (element.name == matchingName) {
    return []
  } else if (element.clade != null) {
    let i
    let result = null
    let count = 0

    for (i = 0; result == null && i < element.clade.length; i++){
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