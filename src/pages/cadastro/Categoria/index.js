import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'#000'
  };

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

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>
      <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          console.log('Você tentou enviar o formulário');
          setCategorias([
            ...categorias,
            valores
          ]);
          setValores(valoresIniciais);
      }}>
      <FormField label="Nome da Categoria" type="text" name="nome"  value={valores.nome} onChange={handleChange}/>
      <FormField label="Descrição" type="textarea" name="descricao" value={valores.descricao} onChange={handleChange}/>
      <FormField label="Cor" type="color" name="cor" value={valores.cor} onChange={handleChange}/>
        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria,indice)=>{
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
