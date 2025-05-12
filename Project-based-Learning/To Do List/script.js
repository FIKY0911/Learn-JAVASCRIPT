let active = document.querySelector('#push')
let result = document.querySelector('#newtask input')
let title = document.createElement('h3')
let task = document.querySelector('#tasks')

active.onclick = () => {
    if(result.value.length == 0) {
        alert('Please enter a Task!');
    } else{
        task.innerHTML += 
        `<div class="task">
            <span id="taskname">
                ${result.value}
            </span>
            
            <button class="delete">
            <i class="far fa-solid fa-trash-alt"></i>
            </button>
                
        </div>`;

        let current_tasks = document.querySelectorAll('.delete');
        for (let task of current_tasks) {
            task.onclick = function() {
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll('.task');
        for (let task of tasks) {
            task.onclick = function() {
                this.classList.toggle('completed');
            }
        }

        result.value = ""; //Mengosongkan input setelah menambahkan nilai
    }
}   

