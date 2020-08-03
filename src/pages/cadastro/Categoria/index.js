import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'#000'
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  //const [valores, setValores] = useState(valoresIniciais);

  useEffect(() => {
  if(window.location.href.includes('localhost')) {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
     .then(async (respostaDoServer) =>{
      if(respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        setCategorias(resposta);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
     })
  }
}, []);

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
          clearForm();
      }}>
      <FormField
        label="Nome da Categoria"
        type="text" name="nome"
        value={valores.nome}
        onChange={handleChange}
        />
      <FormField
        label="Descrição"
        type="textarea"
        name="descricao"
        value={valores.descricao}
        onChange={handleChange}
      />
      <FormField
        label="Cor"
        type="color"
        name="cor"
        value={valores.cor}
        onChange={handleChange}
      />
        <Button>
          Cadastrar
        </Button>

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
