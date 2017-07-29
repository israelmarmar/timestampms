var express = require('express');
var app = express.Router();

var port = process.env.PORT || 3000;

 var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function tm(unix_tm) {
       var a = new Date(unix_tm * 1000);
 
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' '+date+', '+year;
  return time;

    }

function dt(date){
var y=date.split(", ");
var m=months.indexOf(y[0].split(" ")[0])+1;
var d=y[0].split(" ")[1];
y=y[1];

return new Date(m+"/"+d+"/"+y).getTime()/1000;

}

function isInteger(n) { 
      return !isNaN(parseInt(n))
}

app.get('/', function (req, res) {
 res.json({ unix: null, natural: null});
}

app.get('/:time', function (req, res) {

var time=req.params.time;
 
if (isInteger(time))
res.json({ unix: parseInt(time), natural: tm(time)});
else
res.json({ unix: dt(time), natural: time});

})
app.listen(port, function () {
 console.log(Date.now());
})
