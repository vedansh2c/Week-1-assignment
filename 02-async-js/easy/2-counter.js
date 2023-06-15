// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


var start=1;

function counter(){
    console.log(start++);
    setTimeout(counter,1*1000);
}
setTimeout(counter, 1*1000);

    























































