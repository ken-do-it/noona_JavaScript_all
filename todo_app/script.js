let taskInput = document.getElementById("task_input");
let addButton = document.getElementById("add_button");
let tabs = document.querySelectorAll(".task_tabs div");
let horizontalUnderLine = document.getElementById("under_line")
let taskList = []
let mode = 'all';
let filterList = [];
let message = document.getElementById("message");


addButton.addEventListener("click", addTask)

taskInput.addEventListener("focus", clearMessage);  



for (let i = 1; i < tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        filter(event)
        horizontalIndicator(event);
    });
}


function addTask() {
    let taskContent = taskInput.value
    if (taskContent === "") {
        showMessage("할 일을 입력해주세요");
        return;
    }

    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value, 
        isComplete:false
    }
    taskList.push(task)
    console.log(taskList)
    render();
    taskInput.value = "";
    clearMessage(); // Clear message after adding task
}

taskInput.addEventListener("keypress", handleEnterPress);

function handleEnterPress(event) {
  if (event.key === "Enter") {
    addTask();
  }
}


function clearMessage() {
    showMessage("");  // Clear the message when input gets focus
}

function render() {
    let result = "";
    let list = [];
    if (mode === "all") {
        list = taskList;
    } else if (mode === "ongoing" || mode === "done") {
        list = filterList;
    }


    let resultHTML = ``;
    for (let i = 0; i < list.length; i++) {

        if (list[i].isComplete == true) {
            resultHTML +=`<div class="task task_done">
                    <div class  = "task_item">${list[i].taskContent}</div> 
                    <div class = "icon_con"> 
                        <button><i class="fa-solid fa-arrow-rotate-left icon_size" onclick = "toggleComplete('${list[i].id}')"></i></button>
                        <button><i class="fa-solid fa-trash-can icon_size2" onclick = "deleteTask('${list[i].id}')"></i></button>
                    </div>
                </div>`;
        } else { 
            resultHTML += `<div class="task">
            <div class  = "task_item">${list[i].taskContent}</div> 
            <div class = "icon_con">
                <button><i class="fa-solid fa-circle-check icon_size" onclick = "toggleComplete('${list[i].id}')"></i></button>
                <button><i class="fa-solid fa-trash-can icon_size2" onclick = "deleteTask('${list[i].id}')"></i></button>
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
    // render();
    filter(); // 진행중에서 삭제시 즉각 사라지기
}


function deleteTask(id) {
    for(let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    // render();
    filter()
}


function filter(event) {

    if (event) {
        mode = event.target.id;
        tabs.forEach(menu =>menu.addEventListener("click", (event) => horizontalIndicator(event)));
        function horizontalIndicator(event) {
            horizontalUnderLine.style.left = event.currentTarget.offsetLeft + "px";
            horizontalUnderLine.style.width = event.currentTarget.offsetWidth + "px";
            horizontalUnderLine.style.top = event.currentTarget.offsetTop + event.currentTarget.offsetHeight +"px";
        }
        
    }
   
    filterList = [];
    

    if (mode === "all") {
        render();
    } 
    
     if (mode === "ongoing") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === false){
                filterList.push(taskList[i])
            }
        }
        render();
    } else if (mode === "done") {
        //끝나는 케이스 
        //task.isComplete = true
        for (let i = 0; i<taskList.length; i++) {
            if (taskList[i].isComplete === true) {
                filterList.push(taskList[i])
            }
        }
        render();
    }
    render();
}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}


function showMessage(msg) {
    message.innerText = msg;
}
// console.log(document.getElementById("test").innerHTML)   // <span>hi</span>  test class 안에 안에 있는 태그까지 가지고 옴
// console.log(document.getElementById("test").textContent) //   hi  test class 안에 있는 text 만 가지고 옴


// document.getElementById("test").innerHTML = `<h1>Noona</h1>` // Noona h1 크기로 text 인 Noona 만 표시됨 
// document.getElementById("test").textContent = `<h1>Noona2</h1>`  // <h1>Noona2</h1>   h1 태그 포함해서 가지고 옴 



