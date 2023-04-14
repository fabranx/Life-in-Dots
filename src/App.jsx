import { useEffect, useState } from 'react'
import './App.css'
import Dots from './components/Dots'
import { DateType, DotsperLine } from './dateType'
import { calculateMonths, calculateWeeks, calculateYears } from './calculator'

const currentDate = new Date(Date.now())


function App() {
  const [birthDate, setBirthDate] = useState('')
  const [dotsRepresentation, setDotsRepresentation] = useState(DateType.YEARS)
  const [numColoredDots, setNumColoredDots] = useState(0)


  function onDateChange(e) {
    let selectedDate = new Date(e.target.value)
    setBirthDate(selectedDate)
  }

  function onRepresentationChange(e) {
    setDotsRepresentation(e.target.value)
  }
  
  useEffect(() => {
    if(birthDate){
      switch (dotsRepresentation) {
        case DateType.YEARS:
            setNumColoredDots(calculateYears(birthDate, currentDate))
          break;

        case DateType.MONTHS:
          setNumColoredDots(calculateMonths(birthDate, currentDate))
          break;

        case DateType.WEEKS:
          setNumColoredDots(calculateWeeks(birthDate, currentDate))
          break;
      
        default:
          break;
      }
    }
  }, [birthDate, dotsRepresentation])

  return (
    <div>
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
      <p className='legend'>Legend: 1 row = {
        dotsRepresentation === DateType.YEARS ? `${DotsperLine.YEARS} ${dotsRepresentation}` :
        dotsRepresentation == DateType.MONTHS ? `${DotsperLine.MONTHS} ${dotsRepresentation} (${DotsperLine.MONTHS/12} years)` :
        `${DotsperLine.WEEKS} ${dotsRepresentation} (${DotsperLine.WEEKS/52} year)` 
        }
      </p>
      <Dots dotsRepresentation={dotsRepresentation} numColoredDots={numColoredDots}/>
    </div>
  )
}

export default App
