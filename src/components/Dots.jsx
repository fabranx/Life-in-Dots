import Dot from "./Dot"
import './Dots.css'
import { DateType } from "../dateType"
import { livingTimes } from "../famousDeaths"

const lifeExpectationYear = 90
const lifeExpectationMonth = lifeExpectationYear * 12
const lifeExpectationWeek =  lifeExpectationYear * 52


function Dots({dotsRepresentation, numColoredDots}) {

  let expectation = 0

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
      break;
  }


  return (
    <div className={`dots-wrapper dots-${dotsRepresentation}`}>
      {[...Array(expectation)].map((_, i) => {
        let filtLivingTimes = livingTimes.filter(obj => obj[dotsRepresentation] === i+1)
        return (
        <Dot 
          key={`${dotsRepresentation}-${i}`}
          index={i}
          dotsRepresentation={dotsRepresentation} 
          colored={i<numColoredDots ? true : false}
          famousPersonsDeath={filtLivingTimes}
        />
        ) 
      }
      )}
    </div>
  )
}

export default Dots