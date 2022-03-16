import { useState } from "react";

const TodoForm = ({addTodo}) => {
   
   const [value, setValue] = useState("");

   const submitHandler = (e) => {
       e.preventDefault();
       addTodo({
           id: Date.now(),
           title: value,
           done: false
       });
       setValue("")
   }

   return (
       <form onSubmit={submitHandler}>
           <input 
               placeholder="Add Todo"
               value={value}
               onChange={(e) => setValue(e.target.value)}
           />
           <input type="submit" value="Add Todo"/>
       </form>
   )
   
}

export default TodoForm;