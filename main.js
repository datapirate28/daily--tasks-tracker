const task = document.querySelector('#task');
const tasks = document.querySelector('.tasks');


document.querySelector('button').onclick = addTask

function addTask(){
    if(task.value === ''){
        alert('Enter a task to proceed')
    }else{
        let li = document.createElement('li');
        li.innerHTML = task.value
        tasks.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span)
    }
    task.value = '';
    saveData()
}

tasks.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})


function saveData(){
    localStorage.setItem('data', tasks.innerHTML);
}

function showTask(){
    tasks.innerHTML = localStorage.getItem('data');
}
showTask()


// Integrating the update date

const showDate = document.querySelector('.showDate');

// Create a new Date object for the current date and time
const currentDate = new Date();

// Get the current year
const year = currentDate.getFullYear();

// Get the current month (0-indexed, so we add 1)
const month = currentDate.getMonth() + 1; // Months are 0-11

// Get the current day of the month
const day = currentDate.getDate();

// Format the date as a string (e.g., "YYYY-MM-DD")
const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

// Output the result
showDate.innerText = formattedDate
