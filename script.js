var currentTime = document.getElementById("cur-time");

let newAlarm = document.querySelector(".alarm-setter");

const my_alarm_list = document.querySelector("#alarm-list");



const list_of_alarm = [];

// Function to ring alarm when currentTime time equals to alarm set time
function alarmRinging() {
  

  alert("Wake Up!! Alarm Turned on");
}

// code to update time after every second
setInterval(setTime, 1000);

function setTime() {
  let todaydate = new Date();
  let hrs = addZeroes(todaydate.getHours());
  let mins = addZeroes(todaydate.getMinutes());
  let secs = addZeroes(todaydate.getSeconds());
  var am_pm = "AM";

  if (hrs >= 12) {
    am_pm = "PM";
  } else {
    am_pm = "AM";
  }

  if (hrs == 00) {
    hrs = 12;
  }

  if (hrs > 12) {
    hrs = addZeroes(hrs - 12);
  }

  let thistime = `${hrs}:${mins}:${secs} ${am_pm}`;
  //   console.log(thistime);

  currentTime.innerHTML = thistime;

  if (list_of_alarm.includes(thistime)) {
    alarmRinging();
  }
}

// Function to add zeroes if number is in single digit
function addZeroes(time) {
  if (time < 10) {
    return "0" + time;
  }

  return time;
}

setTime();

// funtion to add new alarm

newAlarm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newalarm_hrs = addZeroes(newAlarm.new_al_hrs.value);
  // console.log(newalarm_hrs);
  if (newalarm_hrs == "0") {
    newalarm_hrs = "00";
  }

  let newalarm_mins = addZeroes(newAlarm.new_al_mins.value);
  // console.log(newalarm_mins);
  if (newalarm_mins == "0") {
    newalarm_mins = "00";
  }

  let newalarm_secs = addZeroes(newAlarm.new_al_secs.value);
  // console.log(newalarm_secs);
  if (newalarm_secs == "0") {
    newalarm_secs = "00";
  }

  let newalarm_ampm = newAlarm.new_al_ampm.value;
  // console.log(newalarm_ampm);

  let new_final_alarm = `${newalarm_hrs}:${newalarm_mins}:${newalarm_secs} ${newalarm_ampm}`;
  //   console.log(new_final_alarm);

  // adding new alarm to list

  if (isNaN(new_final_alarm)) {
    if (!list_of_alarm.includes(new_final_alarm)) {
      list_of_alarm.push(new_final_alarm);
      //   console.log(list_of_alarm);
      displayAlarm(new_final_alarm);
      //   my_alarm_list.reset();
    } else {
      alert("Alarm already exists");
    }
  } else {
    alert("Alarm Time Invalid");
  }
});


// function to display alarm lists
function displayAlarm(newAlarm) {
  console.log(newAlarm);

  const html = `<li ><span >${newAlarm}</span>
    <button class="delete-alarm" onclick = "removeFromArray('${newAlarm}')">Delete Alarm</button> </li>`;

  my_alarm_list.innerHTML += html;
}

// function to remove alarm from list

my_alarm_list.addEventListener("click", (e) => {
  console.log("Deleting alarm");

  if (e.target.classList.contains("delete-alarm")) {
    // console.log(e.target.parentElement);

    e.target.parentElement.remove();
  }
});



function removeFromArray(delete_this_alarm) {
  // console.log(delete_this_alarm);
  // console.log("Alarm to be deleted" + delete_this_alarm)
  //   console.log(time);

  let newList = list_of_alarm.filter((time) => time != delete_this_alarm);
  list_of_alarm.length = 0; // Clear contents
  list_of_alarm.push.apply(list_of_alarm, newList);

  console.log(list_of_alarm);
  console.log(newList);
}
