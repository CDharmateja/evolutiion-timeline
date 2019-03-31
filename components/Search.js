import React, {useState} from 'react'
import Link from 'next/link'
import Range from 'rc-slider/lib/Range'

import species from '../species'

function Search() {
  const [name, handleNameChange] = useFormInput('')

  const [sliderValue, handleSliderValueChange] = useState([0, 100])

  const speciesOptions = species.map(speciesOption => 
    <option key={speciesOption} value={speciesOption} />
  )

  return (
    <div>
      <div>
        <label htmlFor="species-choice">
          Choose a species:
        </label>
        <input list="species"
          id="species-choice"
          placeholder="Dog"
          value={name}
          onChange={handleNameChange}
        />
        <datalist id="species">
          {speciesOptions}
        </datalist>
        <div>
          <Range
            min={0}
            max={100}
            value={sliderValue}
            onChange={handleSliderValueChange}
          />
        </div>
      </div>
      <Link 
        href={`/timeline?name=${name}&sliderValue=${sliderValue}`}
      >
        <button>Check timeline</button>
      </Link>
    </div>
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const onChange = e => setValue(e.target.value)

  return [value, onChange]
}

export default Search
