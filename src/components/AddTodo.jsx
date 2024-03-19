import { useForm } from "../hooks"

export const AddTodo = ({ onNewTodo }) => {
     
     const { description, onInputChange, onResetForm } = useForm({         // {D} las props del Hook y el description del value.... 
          description: '',                                                 // va a mandar un valor (value) para el formulario y se {D} arriba...
     });
    
     
     const onFomSubmit = ( event ) => {                     // Submit del <Form>.
          event.preventDefault();                           // Previene el refresh del App.
          if ( description.lenght <= 1 ) return;            // Para poner por lo menos 1 letra.
          
          const newTodo = {                                 // {O} a escribir en la func handleTodo en el FCPadre.
               id: new Date().getTime(),
               description: description,
               done: false
          }

          onNewTodo( newTodo );
          onResetForm();
     } 


     return (

          <>
               <form onSubmit={ onFomSubmit } >
                    
                    <input 
                         type="text"
                         aria-label="campoTexto"
                         placeholder="Que hay que hacer???"
                         className="form-control"
                                                            // PARA QUE FUNCIONE EL inputChange del useForm Hook.
                         value={ description }              // valor de la {D} en el useForm Hook.  
                         name="description"                 // DEBEN COINCIDIR. { name: value: } Props del Target del event. 
                         onChange={ onInputChange }         // fun del useForm Hook.
                    />

                    <button
                         type="submit"
                         className="btn btn-outline-primary mt-1 " >
                         Agregar
                    </button>

               </form>
          
          
          
          
          </>
     )
}
