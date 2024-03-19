import { useState } from "react";

export const useForm = ( initialForm = {} ) => {                        // FC useForm Recibe un {Obj} de Prop.
  
      const [formState, setFormState] = useState( initialForm );        // el state del useState Hook es un {Obj} que recicio como Prop.


      const onInputChange = ({ target }) => {                           // { D } target del event.
            const { name, value } = target;                             // Props del target.
            setFormState(
                  {
                        ...formState,                                   // LLama / MANTIENE todas las Props del state del Hook      
                        [name]: value                                   // Solo quiero cambiar la Prop que el name este siendo modificada. 
                                                                        // Prop computadas de los { Obj } en JS.
                                                                        // la Prop name es la que voy a establecer en el { Obj } y el valor: va a ser value 
                  }
            )

      }; 

      const onResetForm = () => {

            setFormState( initialForm );

      };


      return{
            ...formState,
            formState,
            onInputChange,
            onResetForm
            
            



  }
}
