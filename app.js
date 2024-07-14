var date = new Date();
document.write(date);
document.write("<br>");
document.write("<br>");

var monthindex = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var month = date.getMonth();
document.write("CURRENT MONTH: " + monthindex[month]);
document.write("<br>");
document.write("<br>");

var daysindex = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var day = date.getDay();
document.write("TODAY IS : " + daysindex[day]);
document.write("<br>");
document.write("<br>");

if (date.getDay() === 0 || date.getDay() === 6) {
    alert("Its a fun day");
}
else {
    alert("Today is working day");
}

document.write("<br>");
document.write("<br>");

if (date.getDate() < 16) {
    alert("First fifteen days of the month");
}
else {
    alert("last Fifteen days of the month")
}
document.write("<br>");
document.write("<br>");

var date = new Date();
document.write("CURRENT " + date);
document.write("<br>");
document.write("<br>");


var time = date.getTime();
document.write(" Elapsed millisecond since janauary 1,  1970 : " + time);
document.write("<br>");
document.write("<br>");
var minute = Math.floor(time / (1000 * 60));
document.write(" Elapsed minutes since janauary 1,  1970 : " + minute);

document.write("<br>");
document.write("<br>");


if (date.getHours() < 12) {
    alert("its am")
}
else {
    ("it pm")
}

document.write("<br>");
document.write("<br>");

var date = new Date(2020, 11, 31)
document.write("Later date : " + date);

document.write("<br>");
document.write("<br>");

var ramzan = new Date(2015, 5, 18);
var date = new Date();
var diff = date - ramzan;

var remain = Math.floor(diff / (1000 * 60 * 60 * 24))
document.write(remain + " days passed since ramzan 2015 june, 18 ; ")


document.write("<br>");
document.write("<br>");

var current = new Date();
var pre = new Date(2015, 0, 1);

var dif = current - pre;
var sec = Math.floor(dif / 1000);
document.write("on reference date " + current + sec + "," + " seconds  had passed since biggining of 2015")


document.write("<br>");
document.write("<br>");

var currentDate = new Date();

var previousDate = new Date(currentDate);


var currentHours = currentDate.getHours();

previousDate.setHours(currentHours - 1);


var currentDateString = currentDate.toString();
var previousDateString = previousDate.toString();

document.write("Current date: " + currentDateString + "<br>");
document.write("1 hour ago, it was: " + previousDateString);


document.write("<br>");
document.write("<br>");

var currentDate = new Date();

var previousDate = new Date(currentDate);


var currentyear = currentDate.getFullYear();

previousDate.setFullYear(currentyear - 100);


var currentyearString = currentDate
var previousDateString = previousDate

document.write("Current date: " + currentyearString + "<br>");
document.write("100 years back ago, it was: " + previousDateString);


document.write("<br>");
document.write("<br>");

document.write("<h1>"  + "CUSTOMER ELECTRIC BILL" + " </h1>")
document.write("<br>");


var user = +prompt("Enter your age")
var current = new Date();
var year = current.getFullYear();
var birthday = year - user;
document.write("your age is " + user + "<br>" + "your birth year is " + birthday)

document.write("<br>");
document.write("<br>");

var input = prompt("enter your name ")
var monthindex = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var month = date.getMonth();
var numberofunits = 410;
var chargesperunit = 16;
var netamountpayable = numberofunits * chargesperunit;
var latepaymentcharges = 350;
var grossamount = netamountpayable + latepaymentcharges;

document.write("Customer Name : " + input + "<br>" + "Month : " + monthindex[month] + " <br>" + "Numbers of units:  " + numberofunits + "<br>" + "Charges per unit: " + chargesperunit + "<br>" + "<br>" + "Net amount payable (within due date): " + netamountpayable + "<br>" + "Late amount charges : " + latepaymentcharges + "<br>" + " Gross amount payable (after due date) : " + grossamount)
