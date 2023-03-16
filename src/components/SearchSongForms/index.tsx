import { Form } from "./styles";
import { Container } from '../styles'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeSearch } from '../../../utils/storeSearch'
import { fetchSong } from "../../api/services/fetchSong";

//! URL States
export const SearchSongForms = () => {
  const navigate = useNavigate();
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");


  const fetchArtist = async (e:React.FormEvent) => {
    //. Evita o refresh da página acionado automaticamente pelo submit do form
    e.preventDefault()
    const data = await fetchSong(artist,song);
    //. Armazenando a busca no localstorage, independente do artista/música de fato existir ou não.
    storeSearch(artist, song);
    //! IMPORTANTE
    //. Podemos passar dados juntamente com a mudança de URL utilizando a propriedade 'state'
    navigate('/searchresult', {state: data})
  };

  return (
    <Container>
      <h3>Buscar letra</h3>
      <Form onSubmit={(e) => fetchArtist(e)}>
        <label htmlFor="artist">Artista</label>
        <input
          id="artist"
          type="text"
          value={artist}
          placeholder="Insira o nome do artista"
          onChange={(e) => setArtist(e.target.value)}
        />
        <label htmlFor="song">Música</label>
        <input
          id="song"
          type="text"
          value={song}
          placeholder="Insira o nome da música"
          onChange={(e) => setSong(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </Form>
    </Container>
  );
};
