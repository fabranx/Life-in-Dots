import { useEffect, useState } from 'react'
import './App.css'
import Dots from './components/Dots'
import { DateType } from './dateType'

const datenow = new Date(Date.now())


function App() {
  const [date, setDate] = useState('')
  const [dotsRepresentation, setDotsRepresentation] = useState(DateType.YEARS)
  const [numColoredDots, setNumColoredDots] = useState(0)


  function onDateChange(e) {
    let selectedDate = new Date(e.target.value)
    setDate(selectedDate)
  }

  function onRepresentationChange(e) {
    setDotsRepresentation(e.target.value)
  }
  
  useEffect(() => {
    if(date){
      switch (dotsRepresentation) {
        case DateType.YEARS:
            let yearsDiff = datenow.getFullYear() - date.getFullYear()
            setNumColoredDots(yearsDiff)
          break;

        case DateType.MONTHS:
          let monthsDiff = (datenow.getFullYear() - date.getFullYear()) * 12 + (datenow.getMonth() - date.getMonth())
          setNumColoredDots(monthsDiff)
          break;

        case DateType.WEEKS:
          let weeksDiff = Math.floor(Math.floor((datenow - date) / (1000 * 3600 * 24)) / 7)
          setNumColoredDots(weeksDiff)
          break;
      
        default:
          break;
      }
    }

  }, [date, dotsRepresentation])

  return (
    <div className="App">
      <h1 className='title'>Your Life in Dots</h1>
      <div>
        <label>Date of Birth {' '}
          <input type='date' className='date-input' onChange={onDateChange}></input>
        </label>
      </div>
      <label>Your life in {' '}
        <select className='type-select' value={dotsRepresentation} onChange={onRepresentationChange}>
          <option value={DateType.WEEKS}>weeks</option>
          <option value={DateType.MONTHS}>months</option>
          <option value={DateType.YEARS}>years</option>
        </select>
      </label>
      <p>{numColoredDots} {dotsRepresentation}</p>
      <Dots dotsRepresentation={dotsRepresentation} numColoredDots={numColoredDots}/>
    </div>
  )
}

export default App
