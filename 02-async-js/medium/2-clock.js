// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->




setInterval(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    if(hours<12)console.log(`${hours}:${minutes}:${seconds} AM`);
    else console.log(`${hours-12}:${minutes}:${seconds} PM`);
}, 1000);