import React, {useState} from 'react'
import Link from 'next/link'

function Search() {
  // eslint-disable-next-line no-unused-vars
  const [species, setSpecies] = useState(['Dog', 'Fish', 'Bird'])

  const speciesOptions = species.map(speciesOption => <option key={speciesOption} value={speciesOption} />)

  return (
    <>
      <div>
        <label htmlFor="species-choice">
          Choose a species:
        </label>
        <input list="species" id="species-choice" />
        <datalist id="species">
          {speciesOptions}
        </datalist>
      </div>
      <Link href={`/timeline?name=${'Dog'}`}>
        <button>Check timeline</button>
      </Link>
    </>
  )
}

export default Search
