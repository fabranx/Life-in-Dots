import './Dot.css'



function Dot({dotsRepresentation, colored}) {

  return(
    <div className={`dot dot-${dotsRepresentation} ${colored ? 'colored' : ''}`}></div>
  )
}

export default Dot