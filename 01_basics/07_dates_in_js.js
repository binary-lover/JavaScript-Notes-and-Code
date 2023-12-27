// *************** Dates *****************

// Date funcitn in different formats
let myDate = new Date()
console.log(myDate.toString());         // Wed Dec 27 2023 22:36:22 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     // Wed Dec 27 2023
console.log(myDate.toISOString());      // 2023-12-27T17:06:22.629Z
console.log(myDate.toJSON());           // 2023-12-27T17:06:22.629Z
console.log(myDate.toLocaleString());   // 27/12/2023, 10:36:22 pm
console.log(myDate.toLocaleDateString()); // 27/12/2023
console.log(myDate.toLocaleTimeString()); // 10:36:22 pm
console.log(myDate.getUTCDay());          // 3 (for wednesay) and 0 means january in months
console.log(typeof myDate);               // Object

// set date
let myCreatedDate = new Date(2023,1,23);         // 0 menas january
console.log(myCreatedDate.toString());           // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleDateString()); // 23/2/2023

// set date and time
let myCreatedDate2 = new Date(2023,1,23,19,3,32);   // 1 menas february
console.log(myCreatedDate2.toLocaleString());       // 23/2/2023, 7:03:32 pm

// set date and time with custom format
let myCreatedDate3 = new Date("2-14-2023")              // (dd/mm//yyyy) not supported (mm/dd/yyyy) supported 
let myCreatedDate4 = new Date("2023-08-22 2:30")        // (yyyy/dd//mm) not supported (yyyy/mm/dd) supported
let myCreatedDate5 = new Date("12 apr 2022 2:23:34:244")// (any combination will work )

console.log(myCreatedDate3.toLocaleString());   // 14/2/2023, 12:00:00 am 
console.log(myCreatedDate4.toLocaleString());   // 22/8/2023, 2:30:00 am
console.log(myCreatedDate5.toLocaleString());   // 12/4/2022, 2:23:34 am

// timeslap

let myTimeslap  = Date.now()
console.log(myTimeslap);                // print the time in milisecond from 1st jan 1970 to now
console.log(myCreatedDate5.getTime());  // print the time in milisecond from 1st jan 1970 to the given date
console.log(Math.floor(Date.now()/1000)); // print tha same as above but in seconds 


let newDate = new Date()

console.log(newDate.getMonth() + 1); // again 0 means january ( + 1 for user as 11 is decempter but 12 will more user friendly)
console.log(newDate);
console.log(newDate.toLocaleString("default", {
    weekday: "short",
    day: "numeric",
    year:"numeric",
    hour:"2-digit",
    second:"2-digit",
    minute:"numeric"

})) // Wed 27 2023, 11:47:43 pm
