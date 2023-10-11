let input=document.querySelector('input[type="text"]');
let addbtn=document.querySelector('.add');
let left_cont=document.querySelector('.left-container');
let form=document.querySelector('form');
let right_cont=document.querySelector('.right-container')

//create new task items <li><input type="checkbox"><label>innerText</label></li>
let create_task=function(task){
    let task_item=document.createElement('li'); //<li></li>
    let checkbox=document.createElement('input'); //<input>
    let label=document.createElement('label'); //</label>
    checkbox.type="checkbox"; //<input type="checkbox">
    label.innerText=task; //<label>task</label>
    let remove_btn=document.createElement('button')
    
    task_item.append(checkbox);//<li><input type="checkbox"><label>ziad</label></li>
    task_item.append(label)

    return task_item
}
//function to add task
let add_task=function(event){
    event.preventDefault()
    let new_task=create_task(input.value)
    left_cont.append(new_task)
    input.value=""
    bindTask(new_task,completeTask) //takes the new task and select the checkbox of that list item and call the completeTask function on that list item
}
let completeTask=function(){
    let list_item=this.parentNode
    let checkbox=list_item.querySelector('input[type="checkbox"]')
    checkbox.remove()
    right_cont.appendChild(list_item)

    
    
    
}
//lets bind the checkbox and the task item

let bindTask=function(item,checkboxclicked){
    let checkbox=item.querySelector('input[type="checkbox"]')
    checkbox.onchange=checkboxclicked
}
form.addEventListener('submit',add_task)
