# Problem-Statement-2
**Given an array of bird where every element represents a bird type id, determine the ids of the most 
frequently and least frequently sighted type. If more than 1 type has been spotted that maximum 
amount, return the smallest of their ids & If more than 1 type has been spotted that minimum amount, 
return the smallest of their ids.**

### Things used
- 

## Approach
1. Firstly split the string at the symbol `:` from that we get *Hours , Minutes and Seconds*.
2. In `Seconds` there is also the part where we get to know that time is `AM or PM` and so we have to seperate the Seconds from that.
### Conditions
  - If `Hours===12` set hours into `00`.
  - If second postion in seconds string that will tell time AM or PM , if `P` then we add `12` to hours.
- Then we check if `Minutes+45` is greater than 60 , If yes then we perform calculation and change minutes to left over and If no simply render minutes by adding 45 minutes to it.
```js
hours = parseInt(hours , 10) + 1;
let left = 60 - minutes;        
let newMinutes = 45 - left;
minutes = parseInt(newMinutes);
```
- Then we check if `Seconds+45` is greater than 60 , If yes then we perform calculation and change Seconds to left over and If no simply render Seconds by adding 45sec to it.
```js
minutes = parseInt(minutes) + 1;
let leftsec = 60 - newsec;
let newSeconds = 45 - leftsec;
newsec = parseInt(newSeconds);
```
