const addTask = document.querySelector("#add-task");
const firstItem = document.querySelector(".first-item");
const taskList = document.querySelector(".task-list ol");
const inputTask = document.querySelector("#task");


addTask.addEventListener("click",()=>{
    if(!inputTask.value){
        alert("No task Added");
        return;
    }
    const newTask = document.createElement("li");
    newTask.innerHTML = firstItem.innerHTML;
    taskList.append(newTask);

    newTask.querySelector("p").innerText = inputTask.value;
    inputTask.value = "";
})


taskList.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.classList.contains("finish")){
     const p =  e.target.parentElement.previousElementSibling
     p.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
    }
})