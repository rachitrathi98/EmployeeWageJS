console.log("welcome to employee wage computation problem");
//UC1
let checkForEmployeePresence= Math.floor((Math.random()*10)%2);
const IS_ABSENT=0;
if(checkForEmployeePresence==IS_ABSENT)
{
    console.log("employee is absent");
}
else
{
    console.log("employee is present");
}
//UC2
console.log("UC2");
const WAGE_PER_HOUR=20;
let emp_hours=0;
let employeePresence= Math.floor((Math.random()*10)%3);
switch(employeePresence)
{
    case 1:
        console.log("PART TIME");
        emp_hours=4;
        break;
    case 2:
        console.log("FULL TIME");
        emp_hours=8;
        break;
    default:
        console.log("ABSENT");
        break;
}
let employeeWage= WAGE_PER_HOUR*emp_hours;
console.log(employeeWage);