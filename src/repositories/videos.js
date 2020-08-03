import config from '../config';

function create(video) {

  const URL_VIDEOS = `${config.URL_BACKEND}/videos`;
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(video),
  })
   .then(async (respostaDoServer) =>{
      if (respostaDoServer.ok){
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível retornar os vídeos com as categorias');

  });
}
export default {
  create,
};
