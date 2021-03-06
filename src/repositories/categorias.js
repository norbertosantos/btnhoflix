import config from '../config';

function getAllCategories() {
  const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;
  return fetch(`${URL_CATEGORIAS}`)
   .then(async (respostaDoServer) =>{
      if (respostaDoServer.ok){
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível retornar as categorias');

  });
}

function getAllCategoriesWithVideos() {
  const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
   .then(async (respostaDoServer) =>{
      if (respostaDoServer.ok){
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível retornar os vídeos com as categorias');

  });
}
export default {
  getAllCategories,
  getAllCategoriesWithVideos,
};
