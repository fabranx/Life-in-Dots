import { calculateMonths, calculateWeeks, calculateYears } from "./calculator"

const famousDeath =
  [
    {name: "John Lennon", born: "1940-10-09", died: "1980-12-08"},
    {name: "J. R. R. Tolkien", born: "1892-01-03", died: "1973-09-02"},
    {name: "Kobe Bryant", born: "1978-08-23", died: "2020-01-26"},
    {name: "David Bowie", born: "1947-01-08", died: "2016-01-10"},
    {name: "Jeff Porcaro", born: "1954-04-01", died: "1992-08-05"},
    {name: "George Harrison", born: "1943-02-25", died: "2001-11-29"},
    {name: "Freddie Mercury", born: "1946-09-05", died: "1991-11-24"},
    {name: "Muhammad Ali", born: "1942-01-17", died: "2016-06-3"},
    {name: "Albert Einstein", born: "1879-03-14", died: "1955-04-18"},
    {name: "Steve McQueen", born: "1930-03-24", died: "1980-11-07"},
    {name: "Paul Walker", born: "1973-09-12", died: "2013-11-30"},
    {name: "Bruce Lee", born: "1940-11-27", died: "1973-07-20"},
    {name: "Jimi Hendrix", born: "1942-11-27", died: "1970-09-18"},
    {name: "Andy Warhol", born: "1928-08-06", died: "1987-02-22"},
    {name: "Heath Ledger", born: "1979-04-04", died: "2008-01-22"},
    {name: "Kurt Cobain", born: "1967-02-20", died: "1994-04-05"}
  ]

function calculateFamousDeaths(){
  let livingTimes = []

  famousDeath.map(person => {
    let weeks = calculateWeeks(new Date(person.born), new Date(person.died))
    let months = calculateMonths(new Date(person.born), new Date(person.died))
    let years = calculateYears(new Date(person.born), new Date(person.died))
  
    livingTimes.push({name: person.name, weeks: weeks, months: months, years: years})
  })

  return livingTimes
}


export const livingTimes = calculateFamousDeaths().sort((a,b) => a.weeks < b.weeks ? -1 : a.weeks > b.weeks ? 1 : 0)





