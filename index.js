// Get today
var startDate = new Date();
// 30 days ago
var date = new Date();
date.setDate(date.getDate() - 30);
var endDate = date.toISOString().split('T')[0];

var labels = getDateRange(startDate, endDate);

/*array containing all the dates*/
console.log(labels);

  function getDateRange(start,end) {
        var
            arr = [],
            dt = new Date(end);
    
        while (dt <= start) {
            arr.push(new Date(dt).toISOString().split("T")[0]);
            dt.setDate(dt.getDate() + 1);
        }

        return arr;
    }
 
