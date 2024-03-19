import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer'; 


// const iniState = [];

const init = () => {                                                                 // Func para obtener en el localstorage.
     return JSON.parse( localStorage.getItem( 'todos' )) || [];            

};

export const useTodo = () => {
     
     const [ todos, dispatch, ] = useReducer( todoReducer, [], init );  
          
               // todos es el state. Es un [ {Objs} ].
               // dispatch para cambiar el state por medio de func. Manda las porps de action al reducer.
               // 1ra posición todoReducer: FC js ahi esta el reducer y las decicones de las instrucciones que se envian.
               // 2da posicion iniState: es el iniciador. En este caso es [ {Objs} ].  
               // 3ra posición init: inicializador. En este caso se usa para obtener el localStorage.  */


     useEffect(() => {                        // Fun para guardar en el localStorage.        localStorage.setItem('todos',JSON.stringify(todos));             
          localStorage.setItem( 'todos', JSON.stringify( todos ) );
     }, [ todos ]);
     

     const handleTodo = ( todo ) => {             // func a mandar al FCHijo AddTodo. todo {Prop} interna.
          // console.log( {id} ); 
          const action = {                        // {Obj} accion que quiero mandar al reducer.
               type: '[TODO] Add Todo',           // type Prop se evalua en el todoReducer.
               payload: todo,                     // payload se evaluo en el todoReducer. Es la carga. Eslo que se va a hacer.
               
          }

          
          dispatch( action );                     // dispach fun del useReducer manda la accion al reduder.

     }


     // console.log( {id} );                      // Cod Reducido. handleTodo func.
     const deleteTodo = ( id ) => {               // func a mandar al FCHijo HASTA fcnIETO AddTodo. id {Prop} interna.
          dispatch({
               type: '[TODO] Remove Todo',        // type Prop a evalua en el todoReducer.
               payload: id                        // payload se evaluo en el todoReducer. Es la carga. Eslo que se va a hacer.
          });
     }


     const toggleTodo = ( id ) => {                // func a mandar al FCHijo HASTA fcnIETO AddTodo. id {Prop} interna.
          // console.log( {id} );                  // Cod Reducido. handleTodo func.
          

          dispatch(
               {
                    type: '[TODO] Toggle Todo',   // type Prop a evalua en el todoReducer.
                    payload: id,                  // payload se evaluo en el todoReducer. Es la carga. Eslo que se va a hacer. 
                    
               }
          );
     }
     

     const todosCount = (td) => {
          return td.length;
          
     }
     

     const pendingTodos = (td) => {
          return td.filter( (t) => !t.done ).length

     }
     
     // todosCount: todos.length,
     //           pendingTodos: todos.filter( (td) => !td.done).length,
     
     
     return {
               todos,
               handleTodo,
               deleteTodo,
               toggleTodo,
               todosCount,
               pendingTodos,
               
     }     
     
}
