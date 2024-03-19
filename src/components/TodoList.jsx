import { TodoItem } from "./"

export const TodoList = ({ tod, onDeleteTodo, onToggleTodo  }) => {                  // Prop tod recibe todo el state todos [{obj}] del padre.
                                                                                     // Prop onDeleTodo recibe la func deleteTodo del FCPadre y la pasa al FCNieto.

     return( 
               <>

                    <ul className="list-group">
                              {
                                   tod.map( t => (                                   // .map. mapea el [] del state todos.                               
                                                                                     // (t) es un variable local.
                                        <TodoItem                
                                             key={ t.id }                            // se necesita una key para hacer la lista. la toma de t.id.
                                             todo={ t }                              // Prop para pasar el state todos del FCPadre al FCNieto. 
                                             onDeleteTodo = { onDeleteTodo }         // Prop onDeleTodo recibe la func deleteTodo del FCPadre y la pasa al FCNieto.    
                                             onToggleTodo = { onToggleTodo }         // Prop onToggleTodo recibe la func toggleTodo del FCPadre y la pasa al FCNieto.    
                                        />   
                                   ) )

                              }     
                              
                         </ul>

               </>
     )


}
