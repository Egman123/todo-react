

const TodoList = ({todos, removeTodo, doneTodo}) => {



    return todos.map( (todo, index) => (
            <div key={index} className={todo.done ? "TodoItem done" : "TodoItem"}>
                <span>{todo.title}</span>
                <span>
                    <i className="fas fa-check" onClick={() => doneTodo(todo.id)}></i>    
                    <i className="fas fa-trash" onClick={() => removeTodo(todo.id)} ></i>    
                </span> 
            </div>
    ))
    

}

export default TodoList;