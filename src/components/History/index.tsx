import {useEffect, useState} from 'react';
import { fetchSong } from '../../api/services/fetchSong';
import {Container} from '../styles';
import {useNavigate} from 'react-router-dom';

type TSearchHistory = {
  artist: string;
  song: string;
}

export const History = () => {

  const navigate = useNavigate();

  const [searchHistory, setSearchHistory] = useState<TSearchHistory[]>([]);

  const fetchAgain = async (artist:string, song:string) => {
    const data = await fetchSong(artist, song);
    navigate('/searchresult', {state: data})
  }

  useEffect(() => {
    const storage = localStorage.getItem('searchHistory');
    console.log('storage', storage)
    if(storage) {
      setSearchHistory(JSON.parse(storage));
    }
  }, [])

  return (
    <Container>
      <h3>Histórico</h3>
      {searchHistory.length ? searchHistory.map(({artist,song},index) => {
        return <button key={index} onClick={() => fetchAgain(artist,song)}>{artist} - {song}</button>
      }) : <h3>Nenhuma busca realizada</h3>}
      <button onClick={() => navigate('/')}>Buscar</button>
    </Container>
  )
}