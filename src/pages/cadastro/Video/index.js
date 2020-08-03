import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';

function CadastroVideo() {

  const history = useHistory();
  const [ categorias, setCategorias ] = useState([]);
  const categoriasComTitulos = categorias.map(({titulo}) => titulo);
  const { valores, handleChange } = useForm({
        titulo:'Título Padrão',
        url:'Video Padrão https://www.youtube.com/watch?v=tr3ftsCVXhc',
        categoria:'Front End',

  });

  useEffect(() => {
    categoriaRepository
    .getAllCategories()
    .then((categoriasRetornadas) => {
      setCategorias(categoriasRetornadas);
    });
  },[]);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <form onSubmit ={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === valores.categoria;
        });
        videoRepository.create({
          titulo:valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,

        }).then(() => {
            history.push('/');
        });

      }}>
        <FormField
          label="Título do Vídeo"
          type="text" name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL do Vídeo"
          type="text" name="url"
          value={valores.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria do Vídeo"
          type="text" name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoriasComTitulos}
         />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
