import React, {useState} from 'react'
import Router from 'next/router'
import Range from 'rc-slider/lib/Range'

import species from '../species'

function Search() {
  const [name, handleNameChange] = useFormInput('')
  const [errorMsg, setErrorMessage] = useState('')

  const [sliderValue, handleSliderValueChange] = useState([0, 3001])

  const speciesOptions = species.map(speciesOption => 
    <option key={speciesOption} value={speciesOption} />
  )

  function handleSubmit(e) {
    e.preventDefault()

    if (name === '') {
      setErrorMessage('All fields are required')
    } else {
      setErrorMessage('')
      Router.push(`/timeline?name=${name}&sliderValue=${sliderValue}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <div>
        <label htmlFor="species-choice">
          <strong>Choose a species:</strong>
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
      </div>
      <div className="slider">
        <label htmlFor="range-slider">
          <strong>Select timeline</strong>
        </label>
        <Range
          id="range-slider"
          min={0}
          max={3001}
          value={sliderValue}
          onChange={handleSliderValueChange}
        />
      </div>
      <div className="button">
        <button onSubmit={handleSubmit}>Check timeline</button>
      </div>
      <div className="error">
        {errorMsg}
      </div>
      <style jsx>{`
        .search {
          margin: auto;
          max-width: 300px;
        }

        .search > div {
          margin: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        label {
          margin: 15px 0 15px 0;
        }

        input {
          height: 30px;
        }

        button {
          padding: 10px;
          margin-top: 10px;
          font-size: 16px;
          background-color: green;
          color: white;
          border: 0;
        }

        .error {
          color: red;
        }
      `}</style>
    </form>
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const onChange = e => setValue(e.target.value)

  return [value, onChange]
}

export default Search
