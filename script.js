const todolist=[];

function Addlist(){
    const input = document.querySelector('.todo-input');
    const name = input.value;
    const dateinput = document.querySelector('.due-date');
    const duedate = dateinput.value;
    if(name && duedate){
        todolist.push({
            name,
            duedate
        });
        input.value='';
        dateinput.value = '';
       renderList();
    }
    else if(!name && !duedate) alert("Enter Todo-name and Date");
    else if (!(duedate)){
        alert("Enter  Date");
    }
    else if(!(name)) alert("Enter Todo-name");
    
    
}   
function renderList(){
    let todohtml = '';
    todolist.forEach((todoObject,index) => {
        const {name,duedate} = todoObject;
        //html element
        const html = `<div>${name}</div>
        <div> ${duedate} </div>
        <button onclick="deleteItem(${index})" class="delete-btn">Delete</button>`
       //adding the element to show
        todohtml+=html;
    });
    document.querySelector('.Display-list').innerHTML = todohtml;

    document.querySelectorAll('.delete-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todolist.splice(index,1);
            renderList();
        });
    });
    document.querySelector('.add-btn').addEventListener('click',() =>{
        Addlist();
    });
}