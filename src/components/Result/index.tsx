import { TMusic } from "../../api/services/fetchSong";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Container } from '../styles'

export const Result = () => {
  const location = useLocation();
  const state:TMusic = location.state;
  const { type, art, mus } = state;
  const navigate = useNavigate();

  const msgType = () => {
    switch (type) {
      case "exact":
        return "Letra encontrada!";
      case "aprox":
        return "Uma letra parecida foi encontrada!";
      case "notfound":
        return "Artista ou música não encontrados!";
      case "song_notfound":
        return "Música não encontrada!";
      default:
        return "";
    }
  };

  return (
    <Container>
      <h3>{msgType()}</h3>
      <p>{type === "exact" || type === "aprox" ? <button onClick={()=> navigate('/song', {state: mus})}>{art.name} - {mus[0].name}</button> : null}</p>
      {type === "exact" || type === "aprox" ? (
        <h3>Não encontrou o que procurava?</h3>
      ) : (
        <h3>
          Não encontramos o que você procurava, mas não fique triste, você pode
          acessar milhares de músicas realizando uma nova busca
        </h3>
      )}
      <button onClick={() => navigate("/")}>Nova busca</button>
    </Container>
  );
};