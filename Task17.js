"use strict";

let dateObject = {
    day:"13",
    month:"04",
    year: '2005'
}

let monthName = [null,'January', 'February', 'March', 'April', 'May', 
'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.querySelector('div').style.display = 'none';

function addDate() {
dateObject.day = document.querySelector('.js-day').value;
dateObject.month = document.querySelector('.js-month').value;
dateObject.year = document.querySelector('.js-year').value;

document.querySelector('div').style.display = 'grid';
document.querySelector('main').style.filter = 'blur(8px)'
document.querySelector('body').style.backgroundColor = 'rgb(99, 99, 99)';

if(document.querySelector('.js-day').value === '' || document.querySelector('.js-month').value === '' || document.querySelector('.js-year').value === '') {
    document.querySelector('.result').innerHTML = `Enter number.`;
} else {
    let day = parseInt(dateObject.day, 10);
    let month = parseInt(dateObject.month, 10);
    let year = parseInt(dateObject.year, 10);

    if(isNaN(day) || isNaN(month) || isNaN(year) || document.querySelector('.js-month').value < 1 || document.querySelector('.js-month').value > 12 ) {
        document.querySelector('.result').innerHTML = `Enter valid number.`;
    } 
        else if([1,3,5,7,8,10,12].includes(month)) {
            if(day >= 1 && day <= 31) {
                document.querySelector('.result').innerHTML = `Your birthday is ${day} ${monthName[month]} ${year}`;
            }
            else {
                document.querySelector('.result').innerHTML = `Enter valid date.`;
            }
            }
        else if(month === 2) {
            if(year % 4 === 0) {
                if(day <= 29 && day > 0) {
                    document.querySelector('.result').innerHTML = `Your birthday is ${day} ${monthName[month]} ${year}`;
                } else {
                    document.querySelector('.result').innerHTML = `Enter valid date.`;}
                }
            else {
                if(day <= 28 && day > 0) {
                    document.querySelector('.result').innerHTML = `Your birthday is ${day} ${monthName[month]} ${year}`;
                }
                else {
                    document.querySelector('.result').innerHTML = `Enter valid date` ;}}
            }
        else {
            if (day >= 1 && day < 31){
                document.querySelector('.result').innerHTML = `Your birthday is ${day} ${monthName[month]} ${year}`;
            } else {
                document.querySelector('.result').innerHTML = `Enter valid date.`;
            } 
        }
    }
}

document.addEventListener("keydown" , function(event) {
    if(event.key === 'Enter') {
        addDate();
    } else {
        return;
    }
})