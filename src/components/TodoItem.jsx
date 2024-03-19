export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {        // Prop todo recibe todo el state todos [{obj}] desde el FCPadre.
                                                                           // Prop onDeleTodo recibe la func deleteTodo del FCPadre y la pasa al FCNieto.

     return (                                                              // RETORNA DINAMICAMENTE el FC.  Un <li> con un <span> y un <button> 
          
     
          <li className="list-group-item d-flex justify-content-between" aria-label = 'liElemento'>            {/* clases de boostrap para separar el boton borrar del <smal> */}

               <span 
                    className = { `aling-self-center ${ ( todo.done ) ? 'text-decoration-line-through' : '' }` }
                    onClick = { () => onToggleTodo( todo.id ) }                      /* llama la func toggleTodo desde el FCPAdre y requiere el id del state [{Obj}] seleccionado.       */
                    aria-label = 'spanElement'
               > { todo.description } </span>                                        {/* Prop del state todos del FCPadre.         */}


               <button 
                    className = "btn btn-danger"
                    onClick = { () => onDeleteTodo( todo.id ) }                      /* llama la func deleteTodo desde el FCPAdre y requiere el id del state [{Obj}] seleccionado.       */
                    aria-label = 'btnBorrar'
                    > Borrar </button>                                               {/* manda al todoReducer el id al dispatch.      */}
          
          </li>

          

     )
}
