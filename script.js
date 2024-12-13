const InputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(InputBox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    SaveData();
    }
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            SaveData();
        }
        else if(e.target.tagName === "span"){
            e.target.parentElement.remove();
    SaveData();
        }
 }, false);

       function SaveData(){
        localStorage.setItem("data", listContainer.innerHTML);
       } 
        function showTask(){
            listContainer.innerHTML =localStorage.getItem("data");
        }
        showTask();
        

        
    