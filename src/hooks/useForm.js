import { useState } from 'react';

function useForm(valoresIniciais){
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave,valor){
    setValores(
      {
        ...valores,
        [chave]: valor,
      }
    );
  }
  function handleChange(infosDoEvento) {
    //const { getAttribute, value } = infosDoEvento.target;
    setValor(infosDoEvento.target.getAttribute("name"),infosDoEvento.target.value);
  }

  function clearForm(){
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}
export default useForm;
