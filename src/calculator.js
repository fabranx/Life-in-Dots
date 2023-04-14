export function calculateWeeks(start, end) {
  return Math.floor((end - start) / (1000 * 3600 * 24) / 7)
}

export function calculateMonths(start, end) {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
}

export function calculateYears(start, end) {
  return Math.floor((((end.getFullYear() - start.getFullYear()) * 365) + 
         ((end.getMonth() - start.getMonth()) * 31) + 
         (end.getDate() - start.getDate())) / 365)
}