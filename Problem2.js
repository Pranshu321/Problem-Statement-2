const prompt = require('prompt-sync');

function convert(input) {
    let [hours, minutes, seconds] = input.split(':');
    let newsec = seconds.substr(0,2);
    // console.log(Number(minutes));

    if (hours === '12') {
        hours = '00';
    }

    if (seconds[2] === 'P') {
        hours = parseInt(hours , 10) + 12;
    }
    if (Number(minutes) + 45 > 60) {
        hours = parseInt(hours , 10) + 1;
        let left = 60 - minutes;
        let newMinutes = 45 - left;
        minutes = parseInt(newMinutes);
    }
    else {
        minutes = parseInt(minutes) + 45;
    }
    if (Number(newsec) + 45 > 60) {
        minutes = parseInt(minutes) + 1;
        let leftsec = 60 - newsec;
        let newSeconds = 45 - leftsec;
        newsec = parseInt(newSeconds);
    }
    else {
        newsec = parseInt(newsec) + 45;
    }

    if(Number(hours)<10 && hours==='12' && seconds[2]!='A'){
        hours = '0'+ String(hours);
    }

    return `${hours}:${minutes}:${newsec}`;
}



let time = "12:01:00PM"

console.log(convert(time));
