import React from 'react'

export const ToDoApp = () => {
  
  
    return (
    
    <>
               <h1> TODO App { todosCount(todos) }, <small> Pendientes: { pendingTodos(todos) } </small> </h1>
               <hr />

               <div className="row">    
                    
                    <div className="col-7">                      {/* <div> para Mostrar la lista de todos. */}      
                         < TodoList                              /* FCHijo... Props que Necesita */
                              tod = { todos }                    /* todos es el state del useReducerHook */     
                              onDeleteTodo = { deleteTodo }      /* func para borrar una tarea por id */
                              onToggleTodo = { toggleTodo }
                         />
                    </div>


                                        
                    <div className="col-5">                      {/* <div> para agregar todos */}
                         <h4> Agregar [TODO] </h4>
                         <hr />

                         <AddTodo onNewTodo = { handleTodo }/>
                         
                    </div>

                    
               </div>           
          
          </>


  )
}
