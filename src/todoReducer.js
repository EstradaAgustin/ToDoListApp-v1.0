

export const todoReducer = ( iniState = [], action ) => {        // iniState es un [] y tambien viene.
                                                                 // action Prop accion del reducer contiene type y payload. tiene lo que puede hacer el reducer.        
     switch ( action.type ) {                                    // el recuder trabaja con un estado y recibe la acción.               
          
          
          case '[TODO] Add Todo':
               return [ ...iniState, action.payload] ;           // como el estado es un []. RETORNA un []. usa payload para agregar un td.         
          
         
         
          case '[TODO] Remove Todo':
               return iniState.filter( (td) => td.id !== action.payload );      // .filter regresa un nuevo [Ar] td variable local de CBF.
                                                                                // va a evaluar que en todos los todos td.id sea diferente de action.payload.
                                                                                // Retorna un nuevo [Arr] con state con todos los elementos que sean diferentes del action.payload
 
          case '[TODO] Toggle Todo':
               
               return iniState.map( (td) => {
                    
                    if( td.id === action.payload ) {
                         return {
                              ...td,
                              done: !td.done
                         }
                    }

                    return td;
               });

          
          
          default:
               return iniState;
     }


}