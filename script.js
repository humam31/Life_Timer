let isDOBopen = false;

let dobDate;

const settingIconEl = document.getElementById('settingIcon');
const settingContentEl = document.getElementById('settingContent');
const intialTextEl = document.getElementById("intialText");
const afterDOBEl = document.getElementById("afterDOB");
const dobBtn = document.getElementById("DOB-btn");
const inputDOB = document.getElementById("DOB");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const weeksEl = document.getElementById("weeks");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const makeTwoDigitNumber = (number) =>{
  return number > 9 ? number : `0${number}`;
}

const toggleDOB = () => {
    if(isDOBopen){
        settingContentEl.classList.add('hide');
        
    }else{
         settingContentEl.classList.remove('hide');
    }
    isDOBopen = !isDOBopen;

}


const updateAge = () =>{
    const currDate = new Date();
    const dateDiff= currDate - dobDate;

const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
const month = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
const week = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
const day = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
const hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
const second = Math.floor((dateDiff % (1000 * 60)) / 1000);

  yearEl.innerHTML = makeTwoDigitNumber(year);
  monthEl.innerHTML = makeTwoDigitNumber(month);
  weeksEl.innerHTML = makeTwoDigitNumber(week);
  daysEl.innerHTML = makeTwoDigitNumber(day);
  hoursEl.innerHTML = makeTwoDigitNumber(hour);
  minutesEl.innerHTML = makeTwoDigitNumber(minute);
  secondsEl.innerHTML = makeTwoDigitNumber(second);


}

const gettingDOB = () => {
    const dateSring = inputDOB.value;
    dobDate = new Date(dateSring);
    if(dobDate){
        intialTextEl.classList.add("hide");
        afterDOBEl.classList.remove("hide");
        setInterval(() =>updateAge(), 1000);



    }else{
        intialTextEl.classList.remove("hide");
        afterDOBEl.classList.add("hide");
    }
}

settingIconEl.addEventListener('click', toggleDOB);
dobBtn.addEventListener('click', gettingDOB)
