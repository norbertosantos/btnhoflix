import config from '../config';

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
  getAllCategoriesWithVideos,
};
