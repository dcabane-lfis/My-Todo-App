todos = [
    {id: 1, text: 'Devenir milliardaire', done: true},
    {id: 2, text: 'Racheter Twitter', done: false},
    {id: 3, text: 'Couler Twitter', done: false},
    {id: 4, text: 'Etre content', done: false}
];

function makeHTML(){
    html = '';
    todos.forEach(todo => {
        if(todo.done){
            checkbox = '<input type="checkbox" checked onchange="updateDone('+todo.id+')">';
            doneClass = 'done';
        } else {
            checkbox = '<input type="checkbox" onchange="updateDone('+todo.id+')">';
            doneClass = '';
        }
        html = html + `
        <div class="todo">
            <span class="${doneClass}">${todo.text}</span>
            <span style='display:flex;align-items:center;'>
                ${checkbox}
                <span class="material-icons" onclick="deleteTodo(${todo.id})">&#xe92b;</span>
            </span>
        </div>
        `;
    })

    document.querySelector('#todos').innerHTML = html
}

makeHTML()

function updateDone(id){
    todos.forEach(todo => {
        if(todo.id == id){
            todo.done = !todo.done;
        }
    });
    makeHTML();
}

function addTodo(){
    let text = document.querySelector("#newTodo").value
    if(text.length > 0){
        let id = 0
        todos.forEach(t => {
            if(t.id >= id){
                id = t.id + 1;
            }
        })
        todos.push({id, text, done: false});
        document.querySelector("#newTodo").value = '';
        makeHTML();
    }
    
}

function deleteTodo(id){
    todos = todos.filter(t => t.id != id);
    makeHTML();
}
