let taskInput = document.getElementById("task_input");
let addButton = document.getElementById("add_button");
let taskList = []
addButton.addEventListener("click", addTask)

function addTask() {
    // let taskContent = taskInput.value
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value, 
        isComplete:false
    }
    taskList.push(task)
    console.log(taskList)
    render();
}

function render() {
    let resultHTML = ``;
    for (let i = 0; i < taskList.length; i++) {

        if (taskList[i].isComplete == true) {
            resultHTML +=`<div class="task">
                    <div class = "task_done">${taskList[i].taskContent}</div> 
                    <div> 
                        <i class="fa-solid fa-arrow-rotate-left icon_size" onclick = "toggleComplete('${taskList[i].id}')"></i>
                        <i class="fa-solid fa-trash-can icon_size2" onclick = "deleteTask('${taskList[i].id}')"></i>
                    </div>
                </div>`;
        } else { 
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div> 
            <div class = "icon_con">
                <i class="fa-solid fa-circle-check icon_size" onclick = "toggleComplete('${taskList[i].id}')"></i>
                <i class="fa-solid fa-trash-can icon_size2" onclick = "deleteTask('${taskList[i].id}')"></i>
            </div>
        </div>`;}
        
       
    }

    document.getElementById("task_board").innerHTML = resultHTML;
}

function toggleComplete(id) {
    console.log("id:", id)
    for (let i = 0; i<taskList.length; i++) {
        if (taskList[i].id == id ) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}


function deleteTask(id) {
    for(let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    render();
}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// console.log(document.getElementById("test").innerHTML)   // <span>hi</span>  test class 안에 안에 있는 태그까지 가지고 옴
// console.log(document.getElementById("test").textContent) //   hi  test class 안에 있는 text 만 가지고 옴


// document.getElementById("test").innerHTML = `<h1>Noona</h1>` // Noona h1 크기로 text 인 Noona 만 표시됨 
// document.getElementById("test").textContent = `<h1>Noona2</h1>`  // <h1>Noona2</h1>   h1 태그 포함해서 가지고 옴 



