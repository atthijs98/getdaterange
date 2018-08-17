let getDateRange = function (date, range) {
  let startDate = new Date(date.toISOString().split('T')[0])
  let end = new Date()
  let arr = []
  end.setDate(date.getDate() + range)
  let endDate = new Date(end.toISOString().split('T')[0])
  
  while (endDate.getTime() !== startDate.getTime()) {
     arr.push(new Date(endDate).toISOString().split('T')[0])
     if (endDate < startDate){
       endDate = new Date(endDate.setDate(endDate.getDate() + 1))
     } else {
       endDate = new Date(endDate.setDate(endDate.getDate() - 1))
     }
  }

     
  return arr;
}
 
