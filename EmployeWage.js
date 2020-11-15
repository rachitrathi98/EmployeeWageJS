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
const IS_Full_TIME=2;
const IS_PART_TIME=1;
const FUll_TIME_HRS=8;
const PART_TIME_HRS=4;
const WAGE_PER_HOUR=20;
let emp_hours=0;
let employeePresence= Math.floor((Math.random()*10)%3);
switch(employeePresence)
{
    case IS_PART_TIME:
        console.log("PART TIME");
        emp_hours=PART_TIME_HRS;
        break;
    case IS_Full_TIME:
        console.log("FULL TIME");
        emp_hours=FUll_TIME_HRS;
        break;
    default:
        console.log("ABSENT");
        break;
}
let employeeWage= WAGE_PER_HOUR*emp_hours;
console.log(employeeWage);
//UC3
console.log("Refractor UC2 to Write Functions");  
    function getWorkingHrs(empCheck)
    {
        switch(empCheck)
        {
            case 1:       
                return PART_TIME_HRS;
                
            case 2:      
                 return Full_TIME_HRS;           
            default:
                return 0;        
    
        }
    }
    let empCheck= Math.floor((Math.random()*10)%3);
    let empHrs=getWorkingHrs(empCheck);
    console.log("empWage For UC3: "+WAGE_PER_HOUR*emp_hours);