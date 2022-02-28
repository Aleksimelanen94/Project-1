
//add new row to to do list
function addRow(){

    var li = document.createElement("li");
    var toDoInput = document.getElementById("toDo").value;
    var toDoText = document.createTextNode(toDoInput + " " + time.value);
    li.appendChild(toDoText);
    
    //check if user textfield input is valid
    if(toDoInput === "" || toDoInput.length < 4){
        alert("Textfield is empty or invalid (input must be more than 4 characters long)");
    }else{
        document.getElementById("toDoList").appendChild(li);
    }
    document.getElementById("toDo").value = "";

    //reset time value
    var timeInput = document.getElementById("time");
    timeInput.value = timeInput.defaultValue;
    
    //create checkbox to list item
    var doneButton = document.createElement("input");
    doneButton.type ="checkbox";
    doneButton.className = "doneButton";
    li.appendChild(doneButton);
    //add Delete button to list item
    var deleteButton = document.createElement("input");
    deleteButton.type ="button";
    deleteButton.className = "delete"
    deleteButton.value ="X";
    li.appendChild(deleteButton);
    
    //delete button function
    var deleteButtons = document.getElementsByClassName("delete");
        for (i = 0; i < deleteButtons.length; i++){
            deleteButtons[i].onclick = function(){
            var listItem = this.parentElement;
            listItem.style.display = "none";
        }
    }
}
//clear all list items (for some reason is not working but worked earlier)
function clearList(){
    var listItem = document.getElementsByName("li");
    for(i = 0; i < listItem.length; i++){
        listItem[i].style.display = "none";
    }
}

function SaveList(){
    var itemList = [];

    var itemValues = document.querySelectorAll('li');
    for(i = 0; i < itemValues.length; i++){
        if(itemValues[i].style.display != "none"){
            itemList.push(itemValues[i].childNodes[0].nodeValue);
        }
    }
    console.log(itemList);
    localStorage.setItem('items', JSON.stringify(itemList));
    console.log(localStorage);
}

function LoadList(){
    const storedList = JSON.parse(localStorage.getItem('items'));
    console.log(storedList);

    for(i = 0; i < storedList.length; i++){ // no idea why this skips value number 1!?
        var li = document.createElement("li");
        var toDoInput = document.getElementById("toDo").value;
        var toDoText = document.createTextNode(storedList[i]);
        li.appendChild(toDoText);
        document.getElementById("toDoList").appendChild(li);

            //create checkbox to list item (doesnt save checked list items)
        var doneButton = document.createElement("input");
        doneButton.type ="checkbox";
        doneButton.className = "doneButton";
        li.appendChild(doneButton);
        //add Delete button to list item
        var deleteButton = document.createElement("input");
        deleteButton.type ="button";
        deleteButton.className = "delete"
        deleteButton.value ="X";
        li.appendChild(deleteButton);
    
        //delete button function
        var deleteButtons = document.getElementsByClassName("delete");
            for (i = 0; i < deleteButtons.length; i++){
                deleteButtons[i].onclick = function(){
                var listItem = this.parentElement;
                listItem.style.display = "none";
            }
        }
    }

}

function ClearSavedList(){
    localStorage.clear();
}