// var now = new Date();

// console.log(now.toLocaleDateString());
// var d = now.toLocaleDateString().replace(/(^\d{4})(\d{2})(\d{2}$)/, '$1/$2/$3');

// d = new Date(d);
// console.log(d.getDay());
// d.setDate(d.getDate() - d.getDay());
// var nexts = new Date(d.setDate(d.getDate() + 7));
// console.log(d);
var data = 'Thứ Tư: 02/12/2020 11:30:00';
var YY = data.slice(14, 18);
var MM = data.slice(11, 13);
var DD = data.slice(8, 10);

var time = data.slice(19, 31);
var dataDay = YY + '/' + MM + '/' + DD + ' ' + time;

console.log(dataDay);
