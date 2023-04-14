import { DateType, DotsperLine } from '../dateType';
import './Dot.css'



function Dot({dotsRepresentation, colored, famousPersonsDeath, index}) {
  let align = 'left'
  
  switch (dotsRepresentation) {
    case DateType.YEARS:
      if(index % DotsperLine.YEARS > DotsperLine.YEARS / 2) 
        align='right'
      break;
    
    case DateType.WEEKS:
      if(index % DotsperLine.WEEKS > DotsperLine.WEEKS / 2)
        align='right'
    break;
  
    case DateType.MONTHS:
      if(index % DotsperLine.MONTHS > DotsperLine.MONTHS / 2)
      align='right'
    break;

    default:
      break;
  }

  return(
    <div 
      className={
        `dot-${dotsRepresentation} 
        ${colored ? 'colored' : ''} 
        ${famousPersonsDeath.length > 0 ? 'highlighted-dot ' : 'dot'}
        ${align}
        `}
      data-hover = {famousPersonsDeath.length > 0 ? 
        famousPersonsDeath.map(person => `${person.name} (${person[dotsRepresentation]} ${dotsRepresentation})` ).join(' - ')
        : ''}
    >
    </div>
  )
}

export default Dot