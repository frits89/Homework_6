var todo = [];

var filterActive= "todo"
changeTodoMetas();

function addTodo() {
    var obj = {
        id: todo.length,
        completed: false,
        text: ""
    };
    obj.text = document.getElementById('listdata').value;
  
    todo.push(obj);
  populateTodo(todo,true);

    document.getElementById('listdata').value = "";
    changeTodoMetas();
}


//кнопка remove
function removeTodo(item) {

    var itemIndex = findItemById(item)
    todo.splice(itemIndex, 1);
    changeTodoMetas();
  populateTodo(todo,true)
}


function findItemById(item){
  var index = todo.findIndex(function(todoIterator){
    return  todoIterator.id === item;
  });
 if(index !== -1){
   return index
 }
  return null;
}

//при нажатии add очищается строка ввода
function changeTodoMetas() {
      var todoCompleted = todo.filter(function(todoIterator){

     return todoIterator.completed===true;

   });
}


function removeAll(){
    document.getElementById("ul").innerHTML = "";


}



//при щелчке мышкой фон и зачеркивание
function toggleTodo(item){
  var toggleItem = document.getElementById('todo'+item);
  toggleItem.classList.toggle('class1');
  var itemIndex = findItemById(item);
  todo[itemIndex].completed = !todo[itemIndex].completed
  changeTodoMetas();
  filterTodo(filterActive)
}

function populateTodo(result,cleanup){
  var todos = result;
  var todoHtml=""
  todos.map(function(todoObj){
     todoHtml += `<li class="list-group-item ${todoObj.completed && "class1"}" onclick="toggleTodo(${todoObj.id})" id=todo${todoObj.id} > ${todoObj.text}<button class="btn btn-danger pull-right cls class1" onclick="removeTodo(${todoObj.id})">Remove</button></li>`;
  })
      
   var todoList=  document.getElementById('ul')
  if(cleanup) todoList.innerHTML = ""
  todoList.insertAdjacentHTML("beforeend", todoHtml);
  changeTodoMetas()
}

