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