let taskInput = document.getElementById("task_input");
let addButton = document.getElementById("add_button");
let taskList = []
addButton.addEventListener("click", addTask)

function addTask() {
    let taskContent = taskInput.value
    taskList.push(taskContent)
    console.log(taskList)
    render();
}

function render() {
    let resultHTML = ``;
    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
                    <div>${taskList[i]}</div> 
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`;
    }

    document.getElementById("task_board").innerHTML = resultHTML;
}


console.log(document.getElementById("test").innerHTML)   // <span>hi</span>  test class 안에 안에 있는 태그까지 가지고 옴
console.log(document.getElementById("test").textContent) //   hi  test class 안에 있는 text 만 가지고 옴


document.getElementById("test").innerHTML = `<h1>Noona</h1>` // Noona h1 크기로 text 인 Noona 만 표시됨 
document.getElementById("test").textContent = `<h1>Noona2</h1>`  // <h1>Noona2</h1>   h1 태그 포함해서 가지고 옴 



