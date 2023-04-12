import Dot from "./Dot"
import './Dots.css'
import { DateType } from "../dateType"

const lifeExpectationYear = 90
const lifeExpectationMonth = lifeExpectationYear * 12
const lifeExpectationWeek =  lifeExpectationYear * 52

function Dots({dotsRepresentation, numColoredDots}) {

  let expectation = null

  switch (dotsRepresentation) {
    case DateType.YEARS:
      expectation = lifeExpectationYear
      break;
  
    case DateType.MONTHS:
      expectation = lifeExpectationMonth
      break;
    
    case DateType.WEEKS:
      expectation = lifeExpectationWeek
      break;

    default:
      expectation = null
      break;
  }


  return (
    <div className={`dots-wrapper dots-${dotsRepresentation}`}>
      {[...Array(expectation)].map((_, i) =>
        <Dot 
          key={`${dotsRepresentation}-${i}`} 
          dotsRepresentation={dotsRepresentation} 
          colored={i<numColoredDots ? true : false}
        />
      )}
    </div>
  )
}

export default Dots