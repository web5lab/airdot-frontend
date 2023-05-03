export const todayDate = ()=>{
    const now = new Date(Date.now());
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const year = now.getFullYear();
const formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate)

return formattedDate
}

export function getDaysBetweenDates(startDate, endDate) {
    console.log(startDate,endDate)
    const oneDay = 1000 * 60 * 60 * 24; 
    const startDateMs = new Date(startDate).getTime(); 
    const endDateMs = new Date(endDate).getTime(); 
    const diffMs = endDateMs - startDateMs;
    const diffDays = Math.floor(diffMs / oneDay); 
  
    return diffDays;
  }

  